import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';

interface AdminPanelProps {
  currentAmount: number;
  isPaid: boolean;
  onUpdateAmount: (amount: number) => void;
  onTogglePaid: (paid: boolean) => void;
}

export const AdminPanel = ({ currentAmount, isPaid, onUpdateAmount, onTogglePaid }: AdminPanelProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newAmount, setNewAmount] = useState(currentAmount.toString());
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toast } = useToast();

  const handleLogin = () => {
    if (password === 'vini123') {
      setIsAuthenticated(true);
      toast({
        title: "Acesso liberado!",
        description: "Bem-vindo ao painel de administração.",
      });
    } else {
      toast({
        title: "Senha incorreta!",
        description: "Tente novamente.",
        variant: "destructive",
      });
    }
  };

  const handleUpdateAmount = () => {
    const amount = parseFloat(newAmount);
    if (!isNaN(amount) && amount >= 0) {
      onUpdateAmount(amount);
      toast({
        title: "Valor atualizado!",
        description: `Novo valor: R$ ${amount.toFixed(2)}`,
      });
    } else {
      toast({
        title: "Valor inválido!",
        description: "Digite um valor numérico válido.",
        variant: "destructive",
      });
    }
  };

  if (!isOpen) {
    return (
      <Button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 bg-gradient-main hover:bg-gradient-main/90 text-primary-foreground border-0 shadow-glow rounded-2xl px-6 py-3 font-display font-semibold tracking-wide transition-all duration-300 hover:scale-105 animate-glow-pulse"
        size="sm"
      >
        Admin
      </Button>
    );
  }

  return (
    <div className="fixed inset-0 bg-background/90 backdrop-blur-xl z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-card/95 backdrop-blur-xl border-border/50 shadow-glow rounded-3xl animate-scale-in">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="font-display text-xl font-bold text-foreground">Painel Administrativo</CardTitle>
            <Button 
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-xl transition-all duration-200"
            >
              ✕
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {!isAuthenticated ? (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password" className="font-display font-medium text-foreground">Senha de Acesso</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                  className="bg-input/50 border-border/50 rounded-xl backdrop-blur-sm font-display transition-all duration-200 focus:bg-input/80 focus:border-primary/50"
                  placeholder="Digite a senha..."
                />
              </div>
              <Button 
                onClick={handleLogin} 
                className="w-full bg-gradient-main hover:bg-gradient-main/90 text-primary-foreground border-0 rounded-xl font-display font-semibold tracking-wide py-3 transition-all duration-300 hover:scale-[1.02]"
              >
                Entrar no Painel
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-muted/30 rounded-2xl p-4 space-y-3">
                <Label className="font-display font-medium text-foreground text-base">Status do Pagamento</Label>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${isPaid ? 'bg-green-500' : 'bg-red-500'} animate-pulse`}></div>
                    <span className={`font-display font-semibold ${isPaid ? 'text-green-600' : 'text-red-500'}`}>
                      {isPaid ? 'Quitado' : 'Em Aberto'}
                    </span>
                  </div>
                  <Switch
                    checked={isPaid}
                    onCheckedChange={onTogglePaid}
                    className="data-[state=checked]:bg-primary"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="amount" className="font-display font-medium text-foreground text-base">Valor da Dívida</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground font-display">R$</span>
                  <Input
                    id="amount"
                    type="number"
                    value={newAmount}
                    onChange={(e) => setNewAmount(e.target.value)}
                    className="bg-input/50 border-border/50 rounded-xl backdrop-blur-sm font-display pl-10 transition-all duration-200 focus:bg-input/80 focus:border-primary/50"
                    placeholder="0,00"
                  />
                </div>
              </div>

              <Button 
                onClick={handleUpdateAmount} 
                className="w-full bg-gradient-main hover:bg-gradient-main/90 text-primary-foreground border-0 rounded-xl font-display font-semibold tracking-wide py-3 transition-all duration-300 hover:scale-[1.02]"
              >
                Atualizar Informações
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};