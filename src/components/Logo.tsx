
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'white';
}

export function Logo({ className, size = 'md', variant = 'default' }: LogoProps) {
  const sizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl',
  };

  const colors = {
    default: 'text-realty-dark',
    white: 'text-white',
  };
  
  return (
    <div className={cn('font-serif font-semibold flex items-center gap-1.5', sizes[size], colors[variant], className)}>
      <div className="relative">
        <div className={cn("w-6 h-6 rounded-sm border-2", variant === 'default' ? 'border-realty-dark' : 'border-white')}></div>
        <div className={cn("w-6 h-6 rounded-sm border-2 absolute -top-1 -left-1", 
          variant === 'default' ? 'border-realty-accent bg-white/50' : 'border-realty-accent bg-realty-dark/20')}></div>
      </div>
      <span>Realty Nexus</span>
    </div>
  );
}
