export default function BlogPost({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen pt-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="font-playfair text-display-1 mb-8">Blog Post {params.id}</h1>
        <p className="text-lg text-muted-foreground">Coming soon</p>
      </div>
    </main>
  );
}
