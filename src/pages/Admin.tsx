import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { format } from "date-fns";
import {
  Search,
  Download,
  LogOut,
  Users,
  Calendar,
  MapPin,
  Filter,
  X,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import type { Tables } from "@/integrations/supabase/types";

type WaitlistSignup = Tables<"waitlist_signups">;

const US_STATES = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
  "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
  "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
  "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
  "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
];

const Admin = () => {
  const navigate = useNavigate();
  const { user, isAdmin, isLoading, signOut } = useAuth();
  const [signups, setSignups] = useState<WaitlistSignup[]>([]);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [stateFilter, setStateFilter] = useState<string>("all");
  const [sourceFilter, setSourceFilter] = useState<string>("all");

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        navigate("/admin/login");
      } else if (!isAdmin) {
        toast.error("You don't have admin access");
        navigate("/");
      }
    }
  }, [user, isAdmin, isLoading, navigate]);

  useEffect(() => {
    if (user && isAdmin) {
      fetchSignups();
    }
  }, [user, isAdmin]);

  const fetchSignups = async () => {
    setIsLoadingData(true);
    try {
      const { data, error } = await supabase
        .from("waitlist_signups")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setSignups(data || []);
    } catch (error) {
      console.error("Error fetching signups:", error);
      toast.error("Failed to load signups");
    } finally {
      setIsLoadingData(false);
    }
  };

  const filteredSignups = useMemo(() => {
    return signups.filter((signup) => {
      const matchesSearch =
        searchQuery === "" ||
        signup.establishment_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        signup.contact_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        signup.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        signup.city.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesState = stateFilter === "all" || signup.state === stateFilter;
      const matchesSource =
        sourceFilter === "all" ||
        (signup.how_heard_about_us || "").toLowerCase() === sourceFilter.toLowerCase();

      return matchesSearch && matchesState && matchesSource;
    });
  }, [signups, searchQuery, stateFilter, sourceFilter]);

  const uniqueSources = useMemo(() => {
    const sources = new Set<string>();
    signups.forEach((s) => {
      if (s.how_heard_about_us) sources.add(s.how_heard_about_us);
    });
    return Array.from(sources);
  }, [signups]);

  const handleExportCSV = () => {
    const headers = [
      "Signup Date",
      "Venue Name",
      "Contact Name",
      "Email",
      "Phone",
      "Address",
      "City",
      "State",
      "Zip",
      "Source",
      "Beta Feedback",
    ];

    const rows = filteredSignups.map((s) => [
      format(new Date(s.created_at), "yyyy-MM-dd HH:mm"),
      s.establishment_name,
      s.contact_name,
      s.email,
      s.phone || "",
      `${s.address_line1}${s.address_line2 ? ` ${s.address_line2}` : ""}`,
      s.city,
      s.state,
      s.zip_code,
      s.how_heard_about_us || "",
      s.beta_feedback || "",
    ]);

    const csvContent = [headers, ...rows]
      .map((row) => row.map((cell) => `"${cell}"`).join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `waitlist-signups-${format(new Date(), "yyyy-MM-dd")}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("CSV exported successfully");
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const clearFilters = () => {
    setSearchQuery("");
    setStateFilter("all");
    setSourceFilter("all");
  };

  const hasActiveFilters = searchQuery || stateFilter !== "all" || sourceFilter !== "all";

  if (isLoading || !user || !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Users className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h1 className="font-semibold">Admin Dashboard</h1>
              <p className="text-xs text-muted-foreground">Waitlist Management</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={handleSignOut}>
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </header>

      <main className="container px-6 py-8">
        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid sm:grid-cols-3 gap-4 mb-8"
        >
          <div className="glass-card p-6 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{signups.length}</p>
                <p className="text-sm text-muted-foreground">Total Signups</p>
              </div>
            </div>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gig-blue/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-gig-blue" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {signups.filter((s) => {
                    const date = new Date(s.created_at);
                    const now = new Date();
                    return date.toDateString() === now.toDateString();
                  }).length}
                </p>
                <p className="text-sm text-muted-foreground">Today</p>
              </div>
            </div>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gig-violet/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-gig-violet" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {new Set(signups.map((s) => s.state)).size}
                </p>
                <p className="text-sm text-muted-foreground">States</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-4 rounded-xl mb-6"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search by venue, contact, email, or city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Select value={stateFilter} onValueChange={setStateFilter}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All States</SelectItem>
                  {US_STATES.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={sourceFilter} onValueChange={setSourceFilter}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Source" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sources</SelectItem>
                  {uniqueSources.map((source) => (
                    <SelectItem key={source} value={source}>
                      {source}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {hasActiveFilters && (
                <Button variant="ghost" size="icon" onClick={clearFilters}>
                  <X className="w-4 h-4" />
                </Button>
              )}
              <Button variant="outline" onClick={handleExportCSV}>
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </Button>
            </div>
          </div>
          {hasActiveFilters && (
            <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
              <Filter className="w-4 h-4" />
              Showing {filteredSignups.length} of {signups.length} signups
            </div>
          )}
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-xl overflow-hidden"
        >
          {isLoadingData ? (
            <div className="p-12 text-center text-muted-foreground">
              Loading signups...
            </div>
          ) : filteredSignups.length === 0 ? (
            <div className="p-12 text-center text-muted-foreground">
              {signups.length === 0 ? "No signups yet" : "No signups match your filters"}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Venue</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Source</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSignups.map((signup) => (
                    <TableRow key={signup.id}>
                      <TableCell className="whitespace-nowrap">
                        <div>
                          <p className="font-medium">
                            {format(new Date(signup.created_at), "MMM d, yyyy")}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {format(new Date(signup.created_at), "h:mm a")}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <p className="font-medium">{signup.establishment_name}</p>
                        <p className="text-sm text-muted-foreground">{signup.email}</p>
                      </TableCell>
                      <TableCell>
                        <p>{signup.contact_name}</p>
                        {signup.phone && (
                          <p className="text-sm text-muted-foreground">{signup.phone}</p>
                        )}
                      </TableCell>
                      <TableCell>
                        <p>
                          {signup.city}, {signup.state}
                        </p>
                        <p className="text-sm text-muted-foreground">{signup.zip_code}</p>
                      </TableCell>
                      <TableCell>
                        {signup.how_heard_about_us && (
                          <Badge variant="secondary">{signup.how_heard_about_us}</Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <ChevronDown className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem
                              onClick={() => {
                                navigator.clipboard.writeText(signup.email);
                                toast.success("Email copied");
                              }}
                            >
                              Copy Email
                            </DropdownMenuItem>
                            {signup.beta_feedback && (
                              <DropdownMenuItem
                                onClick={() => {
                                  toast.info(signup.beta_feedback, {
                                    duration: 10000,
                                  });
                                }}
                              >
                                View Feedback
                              </DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
};

export default Admin;
