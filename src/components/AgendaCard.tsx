import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Clock, Calendar } from "lucide-react";

interface AppointmentProps {
  time: string;
  patient: string;
  procedure: string;
  status: "confirmed" | "pending" | "cancelled";
}

const Appointment = ({ time, patient, procedure, status }: AppointmentProps) => {
  const getStatusVariant = (status: string) => {
    switch (status) {
      case "confirmed":
        return "success";
      case "pending":
        return "purple-light";
      case "cancelled":
        return "destructive";
      default:
        return "default";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "confirmed":
        return "Confirmado";
      case "pending":
        return "Pendente";
      case "cancelled":
        return "Cancelado";
      default:
        return "Desconhecido";
    }
  };

  return (
    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-smooth">
      <div className="text-sm font-medium text-brand-purple min-w-[50px]">
        {time}
      </div>
      <div className="w-2 h-2 rounded-full bg-success flex-shrink-0"></div>
      <div className="flex-1 min-w-0">
        <div className="font-medium text-foreground truncate">
          {patient}
        </div>
        <div className="text-sm text-muted-foreground truncate">
          {procedure}
        </div>
      </div>
      <Badge variant={getStatusVariant(status)} className="text-xs">
        {getStatusText(status)}
      </Badge>
    </div>
  );
};

export const AgendaCard = () => {
  const appointments: AppointmentProps[] = [
    { time: "08:00", patient: "Ana P.", procedure: "Consulta Neurologista", status: "confirmed" },
    { time: "08:30", patient: "Carlos M.", procedure: "Clareamento", status: "confirmed" },
    { time: "09:30", patient: "Julia R.", procedure: "Avaliação", status: "confirmed" },
    { time: "10:00", patient: "Marcos T.", procedure: "Rest. Resina", status: "confirmed" },
  ];

  return (
    <Card className="w-full max-w-md bg-card shadow-card border-border">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-brand-purple" />
            <span className="font-semibold text-foreground">Hoje</span>
          </div>
          <Badge variant="purple" className="text-xs">
            24/24 ocupados
          </Badge>
        </div>

        {/* Status Banner */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-foreground mb-1">
            Agenda <span className="text-brand-purple">lotada</span>
          </h3>
          <p className="text-sm text-muted-foreground mb-2">
            Todas as janelas foram preenchidas. Os pacientes receberam lembrete automático 24h antes.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              Taxa de comparecimento prevista:
            </span>
            <span className="font-bold text-success text-lg">95%</span>
          </div>
        </div>

        {/* Appointments List */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Clock className="h-4 w-4 text-brand-purple" />
            <h4 className="font-semibold text-foreground">Horários de hoje</h4>
          </div>
          <div className="space-y-1">
            {appointments.map((appointment, index) => (
              <Appointment key={index} {...appointment} />
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};