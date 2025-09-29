import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Gamepad2, Trophy, MessageSquare, Hash, Info, Wrench } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 text-base px-4 py-2" variant="secondary">
              Русское сообщество
            </Badge>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-balance md:text-7xl">
              JoJo ASBR:<span className="text-primary">CIS</span>
            </h1>
            <p className="mb-8 text-xl text-muted-foreground text-pretty md:text-2xl">
              Найди противника за секунды. Не жди миллион лет в поиске матча.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
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
      <section className="border-b border-border py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <Users className="mx-auto h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-4xl font-bold">~400</CardTitle>
                <CardDescription className="text-base">Игроков в день</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Gamepad2 className="mx-auto h-10 w-10 text-secondary mb-2" />
                <CardTitle className="text-4xl font-bold">~100</CardTitle>
                <CardDescription className="text-base">Постоянных игроков</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Trophy className="mx-auto h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-4xl font-bold">∞</CardTitle>
                <CardDescription className="text-base">Картофельных зарубов</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="border-b border-border py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-center md:text-4xl">О сообществе</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Мы — русское сообщество по играм <span className="text-foreground font-semibold">JoJo ASBR</span>,{" "}
                  <span className="text-foreground font-semibold">JoJo HFTF</span> и{" "}
                  <span className="text-foreground font-semibold">JoJo EOH</span>. В основном все играют в{" "}
                  <span className="text-primary font-semibold">JoJo's Bizarre Adventure: All-Star Battle R</span>.
                  Онлайн в игре маленький, поэтому мы собираемся в голосовом канале и играем друг с другом. Здесь ты
                  всегда найдёшь с кем поиграть!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Channels Section */}
      <section className="border-b border-border py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-3xl font-bold text-center md:text-4xl">Важные каналы</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {/* Main Channels */}
            <Card>
              <CardHeader>
                <Hash className="h-6 w-6 text-primary mb-2" />
                <CardTitle>rules</CardTitle>
                <CardDescription>Правила сервера</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Hash className="h-6 w-6 text-primary mb-2" />
                <CardTitle>news</CardTitle>
                <CardDescription>Новости и обновления</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Hash className="h-6 w-6 text-primary mb-2" />
                <CardTitle>content-hub</CardTitle>
                <CardDescription>Контент сообщества</CardDescription>
              </CardHeader>
            </Card>

            {/* Game Channels */}
            <Card>
              <CardHeader>
                <Gamepad2 className="h-6 w-6 text-secondary mb-2" />
                <CardTitle>asbr</CardTitle>
                <CardDescription>Основной канал игры</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Gamepad2 className="h-6 w-6 text-secondary mb-2" />
                <CardTitle>clips-combos</CardTitle>
                <CardDescription>Клипы и комбо</CardDescription>
              </CardHeader>
            </Card>

            {/* Help Channels */}
            <Card>
              <CardHeader>
                <Info className="h-6 w-6 text-primary mb-2" />
                <CardTitle>character-info</CardTitle>
                <CardDescription>Информация о персонажах</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Wrench className="h-6 w-6 text-primary mb-2" />
                <CardTitle>parsec</CardTitle>
                <CardDescription>Настройка онлайн-игры</CardDescription>
              </CardHeader>
            </Card>

            {/* General */}
            <Card>
              <CardHeader>
                <MessageSquare className="h-6 w-6 text-secondary mb-2" />
                <CardTitle>general</CardTitle>
                <CardDescription>Общение</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Tournament Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Trophy className="mx-auto h-16 w-16 text-primary mb-6" />
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Картофельные зарубы</h2>
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
              Регулярно проводим турниры, где игроки сражаются за звание лучшего. Участвуй, улучшай свои навыки и
              побеждай!
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
              <a href="https://discord.gg/5XPMkYzhpw" target="_blank" rel="noopener noreferrer">
                Участвовать в турнирах
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>JoJo ASBR:CIS — Русское сообщество по играм JoJo</p>
        </div>
      </footer>
    </main>
  )
}
