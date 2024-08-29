using System.ComponentModel.DataAnnotations;

namespace apip.Models
{
    public class Produto
    {
        [Key]
        public int Id { get; set; }
		[Required(ErrorMessage = "O nome é obrigatória.")]
		[StringLength(25, ErrorMessage = "O nome não pode exceder 25 caracteres.")]
		public string Nome { get; set; }
		[Required(ErrorMessage = "A descrição é obrigatória.")]
		[StringLength(100, ErrorMessage = "A descrição não pode exceder 100 caracteres.")]
		public string Descricao { get; set; }
		public int Quantidade { get; set; }
		[Range(0.01, double.MaxValue, ErrorMessage = "O preço deve ser maior que zero.")]
		public decimal Preco { get; set; }
		[DataType(DataType.Date)]
		public DateTime DataCadastro { get; set; } = DateTime.Now;
	}
}
