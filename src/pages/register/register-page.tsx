import { Link } from 'react-router';
import RegisterForm from './register-form';

function RegisterPage() {
    return (
        <div className="min-h-screen bg-background flex">
            {/* Left side - Branding */}
            <div className="hidden lg:flex lg:w-1/2 bg-card border-r border-border items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />
            </div>

            {/* Right side - Form */}
            <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
                <div className="w-full max-w-md">
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-foreground mb-2">
                            Создай свой аккаунт
                        </h2>
                        <p className="text-muted-foreground">
                            Уже зарегистрирован?{' '}
                            <Link to="/login" className="text-accent hover:underline">
                                Войти
                            </Link>
                        </p>
                    </div>

                    <RegisterForm></RegisterForm>

                    <p className="mt-6 text-xs text-muted-foreground text-center leading-relaxed">
                        Создавая аккаунт, вы соглашаетесь с нашими{' '}
                        <Link to="/terms" className="text-accent hover:underline">
                            Условиями использования
                        </Link>{' '}
                        и{' '}
                        <Link to="/privacy" className="text-accent hover:underline">
                            Политикой конфиденциальности
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export const Component = RegisterPage;
