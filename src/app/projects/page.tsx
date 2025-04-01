import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import Link from 'next/link';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Projects',
};

export default async function Projects() {
  const response = await fetch('https://api.github.com/users/jstock/repos');
  const projects = await response.json();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
      {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        projects.map((project: any) => {
          return (
            <Card key={project.html_url}>
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto">
                <Button size="sm">
                  <Link
                    href={project.html_url}
                    title="Open in GitHub"
                    target="_blank"
                  >
                    <i className="bi bi-github mr-2"></i>Open
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })
      }
    </div>
  );
}
