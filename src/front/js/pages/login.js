// import React, { useContext } from "react";
// import { Context } from "../store/appContext";
// import "../../styles/login.scss";

// export const Login = () => {
//     const { store, actions } = useContext(Context);

//     return (
//         <div id="login-code-container">
//             <div name="loginform" id="loginform" action="/wp-login.php" method="post">
//                 <div class="login-username">
//                     <label for="user_login">Nombre de usuario o dirección de correo</label>
//                     <input type="text" name="log" id="user_login" class="input" value="" size="20" />
//                 </div>
//                 <div class="login-password">
//                     <label for="user_pass">Contraseña</label>
//                     <input type="password" name="pwd" id="user_pass" class="input" value="" size="20" />
//                 </div>
//                 <p class="login-submit" />
//                 <input type="submit" name="wp-submit" id="wp-submit" class="button button-primary" value="Acceder" />
//                 <input type="hidden" name="redirect_to" value="/" />
//             </div>
//         </div>
//         <a href="/wp-login.php?action=logout&amp;redirect_to=%2F">Desconectar</a>

// 	)
// };
