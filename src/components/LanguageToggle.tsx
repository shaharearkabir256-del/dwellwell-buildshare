import React from 'react';
import { Button } from '@/components/ui/button';
import { Globe, Languages } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const LanguageToggle = () => {
  const { language, setLanguage } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="glass-card border-0 hover:bg-white/20 text-white"
        >
          <Globe className="w-4 h-4 mr-2" />
          {language === 'bn' ? 'বাংলা' : 'English'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="glass-card border-0">
        <DropdownMenuItem
          onClick={() => setLanguage('bn')}
          className={`flex items-center gap-2 ${
            language === 'bn' ? 'bg-primary/10 text-primary' : ''
          }`}
        >
          <Languages className="w-4 h-4" />
          বাংলা (Bengali)
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage('en')}
          className={`flex items-center gap-2 ${
            language === 'en' ? 'bg-primary/10 text-primary' : ''
          }`}
        >
          <Languages className="w-4 h-4" />
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};