
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, PieChart, LineChart, Globe, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const InvestorDashboard = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-16 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
            Investor Dashboard
          </h1>
          <Button onClick={handleLogout} variant="outline">Logout</Button>
        </div>
        
        <p className="text-neutral-600 dark:text-neutral-300 mb-8">
          Welcome back, {currentUser?.email}. Here's your impact investment overview.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Platform Growth</CardTitle>
              <BarChart3 className="h-4 w-4 text-neutral-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+28%</div>
              <p className="text-xs text-neutral-500">Year-over-year increase</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Ethical Impact</CardTitle>
              <PieChart className="h-4 w-4 text-neutral-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">92/100</div>
              <p className="text-xs text-neutral-500">Platform-wide ethical score</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Transaction Volume</CardTitle>
              <LineChart className="h-4 w-4 text-neutral-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$4.2M</div>
              <p className="text-xs text-neutral-500">Last 30 days</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Geographic Reach</CardTitle>
              <Globe className="h-4 w-4 text-neutral-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">27</div>
              <p className="text-xs text-neutral-500">Countries with active users</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Investment Opportunities</CardTitle>
              <CardDescription>Ethical supply chain initiatives seeking funding</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    name: "Sustainable Cotton Initiative",
                    location: "Ghana",
                    funding: "$250K",
                    impact: "High",
                    roi: "18%",
                    description: "Supporting fair trade cotton farmers with technology and training to improve output while maintaining ethical standards."
                  },
                  {
                    name: "Green Logistics Network",
                    location: "Kenya & Tanzania",
                    funding: "$500K",
                    impact: "Very High",
                    roi: "15%",
                    description: "Building a carbon-neutral logistics network to connect rural suppliers with urban markets using renewable energy vehicles."
                  },
                  {
                    name: "Ethical Textile Factory",
                    location: "Ethiopia",
                    funding: "$750K",
                    impact: "High",
                    roi: "22%",
                    description: "Constructing a solar-powered textile factory with fair labor practices and zero-waste manufacturing processes."
                  }
                ].map((opportunity, i) => (
                  <Card key={i} className="overflow-hidden border-2 border-neutral-200 dark:border-neutral-800">
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-medium text-neutral-900 dark:text-white">{opportunity.name}</h3>
                          <p className="text-neutral-500">{opportunity.location}</p>
                        </div>
                        <div className="flex items-center gap-4 mt-2 md:mt-0">
                          <div>
                            <div className="text-sm text-neutral-500">Funding Goal</div>
                            <div className="font-medium">{opportunity.funding}</div>
                          </div>
                          <div>
                            <div className="text-sm text-neutral-500">Impact</div>
                            <div className="font-medium text-green-600 dark:text-green-400">{opportunity.impact}</div>
                          </div>
                          <div>
                            <div className="text-sm text-neutral-500">Expected ROI</div>
                            <div className="font-medium text-blue-600 dark:text-blue-400">{opportunity.roi}</div>
                          </div>
                        </div>
                      </div>
                      <p className="text-neutral-600 dark:text-neutral-300 mb-4">{opportunity.description}</p>
                      <div className="flex justify-end">
                        <Button className="flex items-center">
                          <span>View Details</span>
                          <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Impact Metrics</CardTitle>
              <CardDescription>Social and environmental impact</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-sm font-medium">CO₂ Reduction</div>
                    <div className="text-sm text-neutral-500">12,450 tons</div>
                  </div>
                  <div className="h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-sm font-medium">Fair Wage Jobs</div>
                    <div className="text-sm text-neutral-500">8,730</div>
                  </div>
                  <div className="h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: "92%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-sm font-medium">Water Conservation</div>
                    <div className="text-sm text-neutral-500">24M gallons</div>
                  </div>
                  <div className="h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-500 rounded-full" style={{ width: "78%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-sm font-medium">Waste Reduction</div>
                    <div className="text-sm text-neutral-500">4,200 tons</div>
                  </div>
                  <div className="h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 rounded-full" style={{ width: "65%" }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Regional Distribution</CardTitle>
              <CardDescription>Platform activity by region</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-sm font-medium">West Africa</div>
                    <div className="text-sm text-neutral-500">42%</div>
                  </div>
                  <div className="h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: "42%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-sm font-medium">East Africa</div>
                    <div className="text-sm text-neutral-500">28%</div>
                  </div>
                  <div className="h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 rounded-full" style={{ width: "28%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-sm font-medium">Southern Africa</div>
                    <div className="text-sm text-neutral-500">18%</div>
                  </div>
                  <div className="h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: "18%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-sm font-medium">North Africa</div>
                    <div className="text-sm text-neutral-500">12%</div>
                  </div>
                  <div className="h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: "12%" }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Quarterly Reports</CardTitle>
              <CardDescription>Latest performance insights</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { title: "Q1 2024 Impact Report", date: "Mar 31, 2024" },
                  { title: "Q4 2023 Impact Report", date: "Dec 31, 2023" },
                  { title: "Q3 2023 Impact Report", date: "Sep 30, 2023" },
                  { title: "Q2 2023 Impact Report", date: "Jun 30, 2023" },
                ].map((report, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors">
                    <div className="w-10 h-10 rounded bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
                      <FileIcon className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
                    </div>
                    <div>
                      <div className="font-medium">{report.title}</div>
                      <div className="text-sm text-neutral-500">{report.date}</div>
                    </div>
                    <Button variant="ghost" size="icon" className="ml-auto">
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Simple file icon component
const FileIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);

export default InvestorDashboard;
