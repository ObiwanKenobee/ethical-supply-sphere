
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, BarChart3, TrendingUp, Package, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BusinessDashboard = () => {
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
            Business Dashboard
          </h1>
          <Button onClick={handleLogout} variant="outline">Logout</Button>
        </div>
        
        <p className="text-neutral-600 dark:text-neutral-300 mb-8">
          Welcome back, {currentUser?.email}. Here's your supply chain overview.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
              <ShoppingBag className="h-4 w-4 text-neutral-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-neutral-500">+4 from last week</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Supply Chain Health</CardTitle>
              <BarChart3 className="h-4 w-4 text-neutral-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">92%</div>
              <p className="text-xs text-neutral-500">+3% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Inventory Forecast</CardTitle>
              <TrendingUp className="h-4 w-4 text-neutral-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Optimized</div>
              <p className="text-xs text-neutral-500">AI predicts stable supply</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Ethical Suppliers</CardTitle>
              <Package className="h-4 w-4 text-neutral-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">47</div>
              <p className="text-xs text-neutral-500">+6 from last month</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Find Ethical Suppliers</CardTitle>
              <CardDescription>Search our network of verified ethical suppliers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500" />
                <input 
                  type="text" 
                  placeholder="Search suppliers by product, location, or certification..." 
                  className="w-full pl-10 pr-4 py-2 border border-neutral-200 dark:border-neutral-800 rounded-md bg-transparent"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: "Organic Cotton Co.", rating: 98, location: "Ghana", category: "Textiles" },
                  { name: "EcoLeather Producers", rating: 94, location: "Kenya", category: "Leather Goods" },
                  { name: "Fairtrade Coffee", rating: 97, location: "Ethiopia", category: "Agriculture" },
                  { name: "Sustainable Woods", rating: 95, location: "Nigeria", category: "Lumber" },
                  { name: "Eco Packaging", rating: 93, location: "South Africa", category: "Packaging" },
                  { name: "Clean Energy Parts", rating: 96, location: "Morocco", category: "Electronics" }
                ].map((supplier, i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">{supplier.name}</h3>
                          <p className="text-sm text-neutral-500">{supplier.category} • {supplier.location}</p>
                        </div>
                        <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs font-medium px-2 py-1 rounded-full">
                          {supplier.rating}% Ethical
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="mt-3 w-full">View Profile</Button>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>AI-Powered Recommendations</CardTitle>
              <CardDescription>Based on your supply chain data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-900/30">
                  <h3 className="font-medium text-blue-800 dark:text-blue-400 mb-1">Inventory Optimization</h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">Reduce stock of cotton materials by 15% to optimize warehouse space and costs.</p>
                </div>
                
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-900/30">
                  <h3 className="font-medium text-green-800 dark:text-green-400 mb-1">Sustainable Alternative</h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">Switch to EcoLeather Producers for a 12% improvement in your ethical score.</p>
                </div>
                
                <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-900/30">
                  <h3 className="font-medium text-amber-800 dark:text-amber-400 mb-1">Order Forecast</h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">Place your next bulk order within 7 days to avoid potential supply chain disruptions.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Blockchain Verification</CardTitle>
              <CardDescription>Recent supply chain verifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-800 dark:text-green-400">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">Order #{(Math.random() * 10000).toFixed(0)}</div>
                      <div className="text-sm text-neutral-500">
                        Verified {Math.floor(Math.random() * 12) + 1} hour{i !== 1 ? "s" : ""} ago
                      </div>
                    </div>
                    <div className="ml-auto text-xs bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded">
                      View on Chain
                    </div>
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

export default BusinessDashboard;
