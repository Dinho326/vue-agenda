export default class ContatoService{

  constructor(resource){
    this._resource = resource('http://localhost:8080/contatos{/id}');
  }

  listar(){

    return this._resource
            .query()
            .then(res => res.json());
  }

  cadastrar(contato){

    if(contato.id){
      return this._resource
        .update({id: contato.id}, contato);
    }else{
      return this._resource
        .save(contato);
    }

  }

  apagar(id){

    return this._resource.delete({id});
  }

  buscar(id){
    return this._resource
      .get({id})
      .then(res => res.json());
  }
}
