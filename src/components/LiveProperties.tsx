import { useProperties } from '@/hooks/useProperties';
import { PropertyCard } from '@/components/PropertyCard';
import { Button } from '@/components/ui/button';
import { RefreshCw, Loader2 } from 'lucide-react';

export const LiveProperties = () => {
  const { properties, loading, error, refetch } = useProperties();

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-destructive mb-4">
          ডেটা লোড করতে সমস্যা হয়েছে: {error}
        </div>
        <Button onClick={refetch} variant="outline">
          <RefreshCw className="w-4 h-4 mr-2" />
          আবার চেষ্টা করুন
        </Button>
      </div>
    );
  }

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
            সর্বশেষ প্রোপার্টি
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            টেলিগ্রাম বট থেকে সরাসরি যোগ করা সর্বশেষ প্রোপার্টিগুলি দেখুন
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <Button
              onClick={refetch}
              variant="outline" 
              size="sm"
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <RefreshCw className="w-4 h-4 mr-2" />
              )}
              রিফ্রেশ করুন
            </Button>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className={`w-2 h-2 rounded-full ${loading ? 'bg-yellow-500 animate-pulse' : 'bg-green-500'}`}></div>
              {loading ? 'আপডেট হচ্ছে...' : `${properties.length}টি প্রোপার্টি`}
            </div>
          </div>
        </div>

        {loading && properties.length === 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-muted rounded-lg h-48 mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                  <div className="h-4 bg-muted rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        ) : properties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4">
              এখনো কোন প্রোপার্টি যোগ করা হয়নি
            </div>
            <p className="text-sm text-muted-foreground">
              টেলিগ্রাম বটে /add_product কমান্ড ব্যবহার করে নতুন প্রোপার্টি যোগ করুন
            </p>
          </div>
        )}
      </div>
    </section>
  );
};