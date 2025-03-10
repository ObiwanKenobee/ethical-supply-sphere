
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, TrendingUp, Users, BarChart3, Plus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SupplierDashboard = () => {
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
            Supplier Dashboard
          </h1>
          <Button onClick={handleLogout} variant="outline">Logout</Button>
        </div>
        
        <p className="text-neutral-600 dark:text-neutral-300 mb-8">
          Welcome back, {currentUser?.email}. Here's your supplier overview.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Products</CardTitle>
              <Package className="h-4 w-4 text-neutral-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18</div>
              <p className="text-xs text-neutral-500">+3 from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Demand Forecast</CardTitle>
              <TrendingUp className="h-4 w-4 text-neutral-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12%</div>
              <p className="text-xs text-neutral-500">Expected increase next month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Business Connections</CardTitle>
              <Users className="h-4 w-4 text-neutral-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">32</div>
              <p className="text-xs text-neutral-500">+5 from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Ethical Score</CardTitle>
              <BarChart3 className="h-4 w-4 text-neutral-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">95%</div>
              <p className="text-xs text-neutral-500">+2% from last assessment</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Your Products</CardTitle>
                <CardDescription>Manage your ethical product catalog</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <div className="relative w-full max-w-sm">
                      <input 
                        type="text" 
                        placeholder="Search products..." 
                        className="w-full pl-4 pr-4 py-2 border border-neutral-200 dark:border-neutral-800 rounded-md bg-transparent"
                      />
                    </div>
                    <Button className="ml-4">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Product
                    </Button>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-neutral-50 dark:bg-neutral-900">
                          <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">Product</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">Category</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">Ethical Score</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">Status</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-neutral-500">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {[
                          { name: "Organic Cotton", category: "Textiles", score: 98, status: "Active" },
                          { name: "Bamboo Fiber", category: "Textiles", score: 97, status: "Active" },
                          { name: "Recycled Polyester", category: "Textiles", score: 94, status: "Active" },
                          { name: "Sustainable Denim", category: "Textiles", score: 92, status: "Pending" },
                          { name: "Hemp Fabric", category: "Textiles", score: 96, status: "Active" },
                        ].map((product, i) => (
                          <tr key={i} className="hover:bg-neutral-50 dark:hover:bg-neutral-900/50">
                            <td className="py-3 px-4">
                              <div className="font-medium">{product.name}</div>
                            </td>
                            <td className="py-3 px-4">
                              <div className="text-sm text-neutral-500">{product.category}</div>
                            </td>
                            <td className="py-3 px-4">
                              <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs inline-block font-medium px-2 py-1 rounded-full">
                                {product.score}%
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <div className={`text-xs inline-block font-medium px-2 py-1 rounded-full ${
                                product.status === "Active" 
                                  ? "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400" 
                                  : "bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400"
                              }`}>
                                {product.status}
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <Button variant="outline" size="sm">Edit</Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Certification Status</CardTitle>
              <CardDescription>Your ethical verifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-900/30">
                  <h3 className="font-medium text-green-800 dark:text-green-400 mb-1">Fair Trade Certified</h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">Valid until Dec 2024</p>
                </div>
                
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-900/30">
                  <h3 className="font-medium text-green-800 dark:text-green-400 mb-1">Organic Materials</h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">Valid until Nov 2024</p>
                </div>
                
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-900/30">
                  <h3 className="font-medium text-green-800 dark:text-green-400 mb-1">Ethical Labor</h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">Valid until Feb 2025</p>
                </div>
                
                <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-900/30">
                  <h3 className="font-medium text-amber-800 dark:text-amber-400 mb-1">Carbon Neutral</h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">Renewal needed in 30 days</p>
                </div>
                
                <Button className="w-full">
                  Apply for New Certification
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Business Inquiries</CardTitle>
            <CardDescription>Recent inquiries from potential business partners</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { business: "EcoFashion Inc.", product: "Organic Cotton", date: "Today" },
                { business: "GreenLife Apparel", product: "Bamboo Fiber", date: "Yesterday" },
                { business: "Sustainable Goods Co.", product: "Hemp Fabric", date: "2 days ago" },
                { business: "EarthWear", product: "Recycled Polyester", date: "3 days ago" },
              ].map((inquiry, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
                  <div>
                    <h3 className="font-medium">{inquiry.business}</h3>
                    <p className="text-sm text-neutral-500">
                      Interested in: <span className="text-neutral-700 dark:text-neutral-300">{inquiry.product}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-sm text-neutral-500">{inquiry.date}</div>
                    <Button size="sm">Respond</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default SupplierDashboard;
