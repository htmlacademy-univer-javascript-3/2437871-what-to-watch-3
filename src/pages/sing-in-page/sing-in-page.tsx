import Footer from '../../components/footer';
import Logo from '../../components/logo';
import { SignInForm } from '../../components/sing-in-form/sing-in-form.tsx';

export function SignInPage() {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <SignInForm/>

      <Footer/>
    </div>
  );
}
