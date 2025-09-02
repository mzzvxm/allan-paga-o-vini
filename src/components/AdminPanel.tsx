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
        className="fixed bottom-4 left-4 z-50 bg-secondary hover:bg-secondary/80"
        size="sm"
      >
        Admin
      </Button>
    );
  }

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-card/95 backdrop-blur-lg border-border shadow-glow">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-foreground">Painel Admin</CardTitle>
            <Button 
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground"
            >
              ✕
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {!isAuthenticated ? (
            <div className="space-y-4">
              <div>
                <Label htmlFor="password">Senha de Acesso</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                  className="bg-input border-border"
                />
              </div>
              <Button onClick={handleLogin} className="w-full">
                Entrar
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="paid-switch">Status Pagamento</Label>
                <div className="flex items-center space-x-2">
                  <span className={`text-sm ${isPaid ? 'text-green-500' : 'text-red-500'}`}>
                    {isPaid ? 'Pago' : 'Pendente'}
                  </span>
                  <Switch
                    id="paid-switch"
                    checked={isPaid}
                    onCheckedChange={onTogglePaid}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="amount">Valor da Dívida (R$)</Label>
                <Input
                  id="amount"
                  type="number"
                  value={newAmount}
                  onChange={(e) => setNewAmount(e.target.value)}
                  className="bg-input border-border"
                />
              </div>

              <Button onClick={handleUpdateAmount} className="w-full">
                Atualizar Valor
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};