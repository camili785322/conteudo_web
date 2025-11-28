function enviaFormulario(evento){
    evento.preventDefault();

  let input_nome = document.getElementById('nome');
  let input_sobrenome = document.getElementById('sobrenome');
  let input_dt_nascimento = document.getElementById('dt_nascimento');

  let nome = input_nome.value;
  let sobrenome = input_sobrenome.value;
  let dt_nascimento = input_dt_nascimento.value;

  const objeto = {
    nome: nome,
    sobrenome:sobrenome,
    dt_nascimento:dt_nascimento,
  }
    if(objeto.nome != '' && objeto.sobrenome != '' && objeto.dt_nascimento != ''){
       localStorage.setItem('usuario',JSON.stringify(objeto))
        geraTabelaDados();
    }else{
        console.log("O formulario é inválido")
    }
    
}
function geraTabelaDados(){
    let usuario = localStorage.getItem('usuario');

    usuario = JSON.parse(usuario);
    console.log(usuario)

    let tabela = document.getElementById('relatorio');

    tabela.innerHTML += `
    <tr>
        <td>${usuario.nome}</td>
        <td>${usuario.sobrenome}</td>
        <td>${usuario.dt_nascimento}</td>
    </tr>
        
    `;
}