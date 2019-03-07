var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var statusValidos = {
    values: ['En espera de pago', 'En elaboracion', 'Enviado'],
    mesage: '{VALUE} no es un role valido'
}
var ventaSchema = new Schema({
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true },
    monto: { type: Number, required: true },
    fecha: { type: String, required: true },
    pagado: { type: Boolean, required: false, default: false },
    envio: { type: String, required: true, default: 'En espera de pago', enum: statusValidos },
    guia: { type: Number, required: false },
    estatuspago: { type: String, required: false },
    idpago: { type: Number, required: false }
}, { collection: 'ventas' })
module.exports = mongoose.model('Ventas', ventaSchema);