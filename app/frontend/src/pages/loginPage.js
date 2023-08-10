import React, { useState } from "react";

function LoginPage() {

  const [userInfo, setUserInfo] = useState({user:"", password:""});
  const [showPassword, setShowPassword] = useState("password");

  const handleChange = ({target}) => {
    setUserInfo((prevState) => ({
      ... prevState,
      [target.name]:target.value
    }))
  }

  const handlePasswordShowing = () => {
    if(showPassword === "password") {
      setShowPassword("text");
    }
    if(showPassword === "text") {
      setShowPassword("password")
    }
  }

  return(
    <div className="login-page">
      <div>
        <form className="login-form">
          <input type="text"
            onChange={handleChange}
            name="user"
            placeholder="Usuário" 
            value={userInfo.name}
          />
          <input
            type={showPassword}
            onChange={handleChange}
            value={userInfo.password}
            name="password"
            placeholder="Senha"
          />
          <button
            type="button"
            onClick={handlePasswordShowing}
          >
              Mostrar Senha
          </button>
          <div className="nav-buttons">
            <button type="button">
              Entrar
            </button>
            <button type="button">
              Cadastrar-se
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;