import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Gamepad2, Trophy, MessageSquare, Hash, Info, Wrench } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-20">
        <div className="menacing-symbol absolute top-20 left-10 text-6xl text-primary animate-float">ゴ</div>
        <div className="menacing-symbol absolute top-40 right-20 text-5xl text-secondary animate-float-delayed">ゴ</div>
        <div className="menacing-symbol absolute top-[60%] left-[15%] text-7xl text-primary animate-float">ゴ</div>
        <div className="menacing-symbol absolute top-[30%] right-[10%] text-6xl text-secondary animate-float-delayed">
          ゴ
        </div>
        <div className="menacing-symbol absolute bottom-40 left-[20%] text-5xl text-primary animate-float">ゴ</div>
        <div className="menacing-symbol absolute bottom-60 right-[25%] text-6xl text-secondary animate-float-delayed">
          ゴ
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/30 via-secondary/10 to-background" />

        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,currentColor_48%,currentColor_52%,transparent_52%)] bg-[length:20px_20px]" />
        </div>

        <div className="container relative mx-auto px-4 py-20 md:py-32 z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 flex justify-center">
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary shadow-[0_0_30px_rgba(255,215,0,0.3)] animate-pulse-glow">
                <Image src="/server-logo.png" alt="JoJo ASBR:CIS Logo" fill className="object-cover" priority />
              </div>
            </div>

            <Badge className="mb-6 text-base px-4 py-2" variant="secondary">
              Русское сообщество
            </Badge>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-balance md:text-7xl relative">
              <span className="absolute -left-12 top-0 text-3xl text-primary opacity-40 hidden md:block">ゴゴ</span>
              JoJo ASBR:<span className="text-primary">CIS</span>
              <span className="absolute -right-12 top-0 text-3xl text-primary opacity-40 hidden md:block">ゴゴ</span>
            </h1>
            <p className="mb-8 text-xl text-muted-foreground text-pretty md:text-2xl">
              Найди противника за секунды. Не жди миллион лет в поиске матча.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transition-shadow"
                asChild
              >
                <a href="https://discord.gg/5XPMkYzhpw" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Присоединиться к Discord
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-border py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="text-center relative overflow-hidden group hover:border-primary transition-colors">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle,currentColor_1px,transparent_1px)] bg-[length:8px_8px]" />
              <CardHeader className="relative">
                <Users className="mx-auto h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-4xl font-bold">~30</CardTitle>
                <CardDescription className="text-base">Игроков в день</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center relative overflow-hidden group hover:border-secondary transition-colors">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle,currentColor_1px,transparent_1px)] bg-[length:8px_8px]" />
              <CardHeader className="relative">
                <Gamepad2 className="mx-auto h-10 w-10 text-secondary mb-2" />
                <CardTitle className="text-4xl font-bold">~20</CardTitle>
                <CardDescription className="text-base">Постоянных игроков</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center relative overflow-hidden group hover:border-primary transition-colors">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle,currentColor_1px,transparent_1px)] bg-[length:8px_8px]" />
              <CardHeader className="relative">
                <Trophy className="mx-auto h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-4xl font-bold">∞</CardTitle>
                <CardDescription className="text-base">Картофельных зарубов</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="border-b border-border py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-center md:text-4xl relative">
              <span className="absolute -left-8 top-1/2 -translate-y-1/2 text-2xl text-secondary opacity-30">ゴ</span>О
              сообществе
              <span className="absolute -right-8 top-1/2 -translate-y-1/2 text-2xl text-secondary opacity-30">ゴ</span>
            </h2>
            <Card className="relative overflow-hidden border-2 hover:border-primary transition-colors">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Мы — русское сообщество по играм <span className="text-foreground font-semibold">JoJo ASBR</span>,{" "}
                  <span className="text-foreground font-semibold">JoJo HFTF</span> и{" "}
                  <span className="text-foreground font-semibold">JoJo EOH</span>. В основном все играют в{" "}
                  <span className="text-primary font-semibold">JoJo's Bizarre Adventure: All-Star Battle R</span>.
                  Онлайн в игре маленький, поэтому мы собираемся в голосовом канале и играем друг против друга. Здесь ты
                  всегда найдёшь с кем поиграть!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Channels Section */}
      <section className="border-b border-border py-16 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-3xl font-bold text-center md:text-4xl relative">
            <span className="absolute -left-8 top-1/2 -translate-y-1/2 text-2xl text-primary opacity-30 hidden md:block">
              ゴ
            </span>
            Важные каналы
            <span className="absolute -right-8 top-1/2 -translate-y-1/2 text-2xl text-primary opacity-30 hidden md:block">
              ゴ
            </span>
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <Card className="hover:border-primary hover:shadow-[0_0_20px_rgba(255,215,0,0.2)] transition-all">
              <CardHeader>
                <Hash className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Rules</CardTitle>
                <CardDescription>Правила сервера</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:border-primary hover:shadow-[0_0_20px_rgba(255,215,0,0.2)] transition-all">
              <CardHeader>
                <Hash className="h-6 w-6 text-primary mb-2" />
                <CardTitle>News</CardTitle>
                <CardDescription>Новости и обновления</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:border-primary hover:shadow-[0_0_20px_rgba(255,215,0,0.2)] transition-all">
              <CardHeader>
                <Hash className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Content-hub</CardTitle>
                <CardDescription>Контент сообщества</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:border-secondary hover:shadow-[0_0_20px_rgba(220,38,38,0.2)] transition-all">
              <CardHeader>
                <Gamepad2 className="h-6 w-6 text-secondary mb-2" />
                <CardTitle>Asbr</CardTitle>
                <CardDescription>Основной канал игры</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:border-secondary hover:shadow-[0_0_20px_rgba(220,38,38,0.2)] transition-all">
              <CardHeader>
                <Gamepad2 className="h-6 w-6 text-secondary mb-2" />
                <CardTitle>Clips-combos</CardTitle>
                <CardDescription>Клипы и комбо</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:border-primary hover:shadow-[0_0_20px_rgba(255,215,0,0.2)] transition-all">
              <CardHeader>
                <Info className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Character-info</CardTitle>
                <CardDescription>Информация о персонажах</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:border-primary hover:shadow-[0_0_20px_rgba(255,215,0,0.2)] transition-all">
              <CardHeader>
                <Wrench className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Parsec</CardTitle>
                <CardDescription>Настройка игры по парсеку</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:border-secondary hover:shadow-[0_0_20px_rgba(220,38,38,0.2)] transition-all">
              <CardHeader>
                <MessageSquare className="h-6 w-6 text-secondary mb-2" />
                <CardTitle>General</CardTitle>
                <CardDescription>Общение</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Tournament Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center relative">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-6xl text-primary opacity-20 animate-pulse">
              ゴゴゴ
            </div>
            <Trophy className="mx-auto h-16 w-16 text-primary mb-6 animate-bounce-slow" />
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Картофельные зарубы</h2>
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
              Регулярно проводим турниры, где игроки сражаются за звание лучшего (и деньги :D). Участвуй, улучшай свои навыки и
              побеждай!
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] transition-shadow"
              asChild
            >
              <a href="https://discord.gg/5XPMkYzhpw" target="_blank" rel="noopener noreferrer">
                Участвовать в турнирах
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 relative z-10">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>JoJo ASBR:CIS — Русское сообщество по играм JoJo</p>
        </div>
      </footer>
    </main>
  )
}
