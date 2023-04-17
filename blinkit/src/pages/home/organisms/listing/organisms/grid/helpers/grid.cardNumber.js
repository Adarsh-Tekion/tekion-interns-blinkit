function cardNumber(categorizedItems)
{
  const rows=[]
for (let i = 0; i < categorizedItems.length; i += 4) {
    const row = categorizedItems.slice(i, i + 4);
    rows.push(row);
  }
  return rows;
}
export {cardNumber}