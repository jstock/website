import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Projects',
};

export default async function Projects() {
  const response = await fetch('https://api.github.com/users/jstock/repos');
  const projects = await response.json();
  console.log(projects);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
      {projects.map((project) => {
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
      })}
    </div>
  );
}
