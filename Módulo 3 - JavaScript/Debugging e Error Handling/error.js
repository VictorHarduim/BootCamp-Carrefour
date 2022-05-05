
const MeuErro = new Error('Mensagem Inválida.');
MeuErro.name = 'InvalidMesage';

MeuErro.stack = 'InvalidMessage: Mensagem Inválida\n at <anonymous>:3:17'

console.log(MeuErro)

// throw MeuErro;