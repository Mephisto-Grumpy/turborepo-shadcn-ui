import { Button } from "@repo/ui/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@repo/ui/components/ui/card'

export default function Page() {
  return (
    <main>
      <Button>Click me</Button>
      <Card>
        <CardHeader>
          <CardTitle>Test Card</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            It's work or not!
          </CardDescription>
        </CardContent>
      </Card>
    </main>
  );
}
