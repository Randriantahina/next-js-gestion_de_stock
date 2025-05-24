import { prisma } from './prisma';

export async function getStockAndSales() {
  // Récupère tous les stocks
  const stocks = await prisma.stock.findMany({
    include: {
      sale: true, // Récupère toutes les ventes liées à chaque stock
    },
  });

  // Prépare les données pour le graphique
  return stocks.map((stock) => ({
    name: stock.name,
    stock: stock.status, // ou stock.quantity si tu as ce champ
    sold: stock.sale.reduce((sum, s) => sum + s.quantity, 0),
  }));
}
