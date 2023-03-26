function Form(){
    return(
      <div class="row">
        <div class="col-lg my-5">
          <h4>Faça seu login</h4>
          <p>Se você não tem conta preencha o formulário abaixo:</p>

          <form class = "form-cadastro" action="http://localhost:3001/login/register" method="POST">
            <div class="form-group">
              <label for="email">Seu e-mail</label>
              <input type="email" class="form-control" name="email"/>
            </div>

            <div class="form-group">
              <label for="password">Sua senha</label>
              <input type="password" class="form-control" name="password"/>
            </div>

            <button type="submit" class="btn btn-primary">Criar minha conta</button>
          </form>

        </div>
    </div>
    );
}

export default Form;