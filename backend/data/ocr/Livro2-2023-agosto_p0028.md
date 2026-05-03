$$\bar{x} = \frac{\langle x, \vec{v} \rangle}{\langle \vec{v}, \vec{v} \rangle} \vec{v} = \frac{1}{10} \langle x, (1, 1, \ldots, 1) \rangle (1, 1, \ldots, 1),$$

ou seja,

$$\bar{x} = (\bar{x}, \bar{x}, \ldots, \bar{x}), \bar{x} = \frac{x_1 + x_2 + \cdots + x_{10}}{10}.$$

Não precisam acreditar nos meus devaneios geométricos. Vou mostrar que a projeção assim obtida é o ponto $\bar{x}$ de $r$ mais próximo de $x$. Acho bom vocês fazer um desenho, pensando no caso $R^3$ (serve, também, $R^2$). Suponhamos que $y$ seja um outro ponto de $r$; vou mostrar que a distância de $y$ a $x$ é maior que a de $\bar{x}$ a $x$. O importante, aqui, é que, como $\bar{x}$ e $y$ estão ambos em $r$, temos

$$< x - \bar{x}, y - \bar{x} > = 0.$$

Isso quer dizer que o triângulo $y\bar{x}x$ é retângulo em $\bar{x}$! Logo, pelo Teorema de Pitágoras-Zumbi, temos

$$|y - x|^2 = |x - \bar{x}|^2 + |y - \bar{x}|^2 > |x - \bar{x}|^2,$$

concluiu Xavier.

Matou a cobra e mostrou o pau! exclamou Yakecan.

**Exercício 3.6** Mostre que é possível chegar ao mesmo resultado sem recorrer a toda a geometria. Pulando a definição do produto escalar, defina, em $\mathbb{R}^{10}$, a norma de $x$ por $|x| = \sqrt{x_1^2 + \ldots + x_{10}^2}$. Mostre que $t = \bar{x}$ é o ponto de mínimo de $f(t) = |(x_1, \ldots, x_{10}) - (t, \ldots, t)|$.

**Exercício 3.7** Mas qual seria a mente doentia que, sem o suporte da poderosa analogia geométrica introduzida pelo produto escalar, defenderia a norma acima em detrimento de outras tão mais razoáveis, como $|x| = |x_1| + \ldots + |x_{10}|$? Observe que ao termo norma corresponde a ideia de tamanho do vetor.

### 3.3 Com quem está o anel?

Depois de dois meses de trabalho, sem um diazinho de folga, Xavier, Yakecan e Zumbi decidiram passar um domingo com a família de Yakecan (Yakecan tem 6 irmãos e irmãs, e 19 sobrinhos e sobrinhas). Xavier passou o dia todo brincando com a criançada. Na volta, no trem, falou:

Fiquei vendo as crianças brincando de passar o anel. Aos poucos percebi certos padrões: a Kauane, por exemplo, passa mais o anel para a Jaci do que para a Juraci, o Bira passa mais para a Nina do que para o Raoni...fiquei pensando se, anotando tudo por muito tempo, não seria possível ter uma tabela com as probabilidades de que cada criança passasse o anel para cada uma das outras, e se isso serviria para alguma coisa, tipo saber qual seria a probabilidade, a longo prazo, de que o anel ficasse com tal ou qual criança.