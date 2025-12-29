import { useContext } from 'react';
import Global from '../../context/global-context';
import { useNavigate } from 'react-router';

const Login = () => {
    const { login } = useContext(Global);
    const navigate = useNavigate();

    const loginHandler = async () => {
        const success = await login('asd', 'asd');
        if (success) navigate('/');
    };
    return <div onClick={loginHandler}>LOGIN</div>;
};
export default Login;
