import { Filter, Search } from 'lucide-react';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { Input } from '@/components/ui/input';
import { ComponentCard } from './component-card';
import { getAllComponents } from './action';
import { CreateComponent } from './create-component';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default async function Admin() {
  const allComponents = await getAllComponents();

  return (
    <>
      <Navbar />
      <div className="max-w-[1300px] mx-auto px-4 md:px-8 py-4 pb-24">
        {/* header */}
        <div className="mb-8">
          <h1 className="text-xl font-medium text-foreground">Components</h1>
          <p className="text-foreground/60 text-sm">
            Manage and browse your UI component collection
          </p>
        </div>
        {/* controls */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/60 h-4 w-4" />
                <Input placeholder="Search components..." className="pl-10" />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/60 h-4 w-4" />
                <Select>
                  <SelectTrigger className="w-48 pl-10">
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="free">Free</SelectItem>
                    <SelectItem value="pro">Pro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <CreateComponent />
          </div>
        </div>
        {/* Components Grid */}
        {allComponents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allComponents.map((component) => (
              <ComponentCard key={component.id} component={component} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No components found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search criteria
            </p>
            <CreateComponent />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
