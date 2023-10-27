export interface Reserva{
    ReservaHabitacionID:number,
    ClienteID:number,
    HabitacionID:number,  
    Fecha:Date,
    FechaEntrada:string | null,
    FechaSalida:string | null,
    Cliente?:string,
    NumeroHabitacion?:string,
    Celular?:string,
}