import {FormEvent, useRef} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {loginAction} from '../../store/api-actions.ts';
import {useNavigate} from 'react-router-dom';
import {getAuthorizationStatus} from '../../store/user-process/selectors.ts';
import {AppRoute, AuthorizationStatus} from '../../constants.ts';
import {toast} from 'react-toastify';

export function SignInForm() {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const authStatus = useAppSelector(getAuthorizationStatus);

  if (authStatus === AuthorizationStatus.Auth) {
    navigate(AppRoute.Main);
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (emailRef.current !== null && passwordRef.current !== null) {
      if (/[0-9]/.test(passwordRef.current.value) &&
        /[a-zA-Z]/.test(passwordRef.current.value) &&
        passwordRef.current.value.length > 0) {
        dispatch(loginAction({
          login: emailRef.current.value,
          password: passwordRef.current.value
        }));
      } else {
        toast.warn('Password should contain 1 letter and 1 number');
      }
    }
  };

  return (
    <div className="sign-in user-page__content">
      <form action="" className="sign-in__form" onSubmit={handleSubmit}>
        <div className="sign-in__fields">
          <div className="sign-in__field">
            <input
              className="sign-in__input"
              type="email"
              placeholder="Email address"
              name="user-email"
              id="user-email"
              ref={emailRef}
            />
            <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
          </div>
          <div className="sign-in__field">
            <input
              className="sign-in__input"
              type="password"
              placeholder="Password"
              name="user-password"
              id="user-password"
              ref={passwordRef}
            />
            <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
          </div>
        </div>
        <div className="sign-in__submit">
          <button className="sign-in__btn" type="submit">Sign in</button>
        </div>
      </form>
    </div>
  );
}
