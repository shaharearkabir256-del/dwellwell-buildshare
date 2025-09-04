import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RefreshCw, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

interface BotStatus {
  isActive: boolean;
  webhookSet: boolean;
  lastUpdate: string | null;
  error: string | null;
}

export const TelegramBotStatus = () => {
  const [status, setStatus] = useState<BotStatus>({
    isActive: false,
    webhookSet: false,
    lastUpdate: null,
    error: null
  });
  const [checking, setChecking] = useState(false);

  const checkBotStatus = async () => {
    setChecking(true);
    try {
      // Check if webhook is responding
      const response = await fetch('/api/telegram-webhook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ test: true })
      });

      if (response.ok) {
        setStatus({
          isActive: true,
          webhookSet: true,
          lastUpdate: new Date().toLocaleString('bn-BD'),
          error: null
        });
      } else {
        throw new Error('Webhook not responding');
      }
    } catch (error) {
      setStatus({
        isActive: false,
        webhookSet: false,
        lastUpdate: null,
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    } finally {
      setChecking(false);
    }
  };

  useEffect(() => {
    checkBotStatus();
  }, []);

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          টেলিগ্রাম বট স্ট্যাটাস
          {status.isActive ? (
            <CheckCircle className="w-5 h-5 text-green-500" />
          ) : (
            <XCircle className="w-5 h-5 text-red-500" />
          )}
        </CardTitle>
        <CardDescription>
          বট এর বর্তমান অবস্থা এবং সংযোগ পরীক্ষা করুন
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-muted-foreground">বট স্ট্যাটাস</div>
            <Badge variant={status.isActive ? 'default' : 'destructive'}>
              {status.isActive ? 'সক্রিয়' : 'নিষ্ক্রিয়'}
            </Badge>
          </div>
          
          <div>
            <div className="text-sm text-muted-foreground">ওয়েবহুক</div>
            <Badge variant={status.webhookSet ? 'default' : 'secondary'}>
              {status.webhookSet ? 'সেট করা' : 'সেট নয়'}
            </Badge>
          </div>
        </div>

        {status.lastUpdate && (
          <div>
            <div className="text-sm text-muted-foreground">সর্বশেষ আপডেট</div>
            <div className="text-sm">{status.lastUpdate}</div>
          </div>
        )}

        {status.error && (
          <div className="flex items-start gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/20">
            <AlertCircle className="w-4 h-4 text-destructive mt-0.5" />
            <div>
              <div className="text-sm font-medium text-destructive">সমস্যা</div>
              <div className="text-sm text-destructive/80">{status.error}</div>
            </div>
          </div>
        )}

        <Button 
          onClick={checkBotStatus} 
          disabled={checking}
          className="w-full"
          variant="outline"
        >
          {checking ? (
            <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
          ) : (
            <RefreshCw className="w-4 h-4 mr-2" />
          )}
          স্ট্যাটাস চেক করুন
        </Button>

        <div className="text-xs text-muted-foreground space-y-1">
          <div>• বট টোকেন: ৮২২৯১৩৩৮০২:***</div>
          <div>• চ্যাট আইডি: ৭৪১৩৪৬১৪৮৬</div>
          <div>• ওয়েবহুক URL: /api/telegram-webhook</div>
        </div>
      </CardContent>
    </Card>
  );
};