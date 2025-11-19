import FeaturedCarousel from "../FeaturedCarousel";

export default function HighlightsSection() {
  const highlightsProjects = [
    {
      id: "p1",
      title: "PONTE PARA O ETÉREO",
      desc: `Nossos alunos, Sophia e Leonardo, publicaram seu livro "Ponte para o Etéreo", uma coletânea de contos.`,
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    {
      id: "p2",
      title: "FEIRA DE PROFISSÕES",
      desc: "A Faculdade Pequeno Princípe foi à nossa escola, proporcionando enriquecimento aos estudantes.",
      img: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
    },
    {
      id: "p3",
      title: "OFICINA DE MÍDIA SOCIAL",
      desc: "Nossa primeira aula da Oficina de Mídia Social, apresentada pela professora Andressa Keller.",
      img: "https://images.unsplash.com/photo-1509223197845-458d87318791",
    },
  ];

  return <FeaturedCarousel items={highlightsProjects} delay={3500} />;
}
