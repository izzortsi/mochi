v de V e um escalar $t$, está definido o **produto** de $t$ por $v, tv$, que é um vetor de V. As operações assim definidas satisfazem às oito famosas propriedades.

**Definição**: Um **espaço vetorial** (real) é uma estrutura que compreende um conjunto, V, e duas operações:

$$+ : \mathbf{V} \times \mathbf{V} \rightarrow \mathbf{V}$$
$$(\mathbf{u}, \mathbf{v}) \mapsto \mathbf{u} + \mathbf{v}$$

e

$$: \mathbb{R} \times \mathbf{V} \rightarrow \mathbf{V}$$
$$(t, \mathbf{v}) \mapsto t\mathbf{v}$$

satisfazendo às oito famosas propriedades abaixo:

(1) $\mathbf{u} + (\mathbf{v} + \mathbf{w}) = (\mathbf{u} + \mathbf{v}) + \mathbf{w}$
(2) $\mathbf{u} + \mathbf{v} = \mathbf{v} + \mathbf{u}$
(3) $\exists 0 \in V | \mathbf{u} + 0 = \mathbf{u}$
(4) $\forall \mathbf{u} \in \mathbf{V} \exists -\mathbf{u} \in \mathbf{V} | \mathbf{u} + (-\mathbf{u}) = 0$
(5) $t(\mathbf{u} + \mathbf{v}) = t\mathbf{u} + t\mathbf{v}$
(6) $(s + t)\mathbf{u} = s\mathbf{u} + t\mathbf{u}$
(7) $s(t\mathbf{u}) = (st)\mathbf{u}$
(8) $1\mathbf{u} = \mathbf{u}$

(isto é: as propriedades (1) a (8) valem para quaisquer vetores $\mathbf{u}, \mathbf{v}$ e $\mathbf{w}$ em V, e para quaisquer números $s$ e $t$).

**Observação**: O vetor nulo 0 mencionado na propriedade (3) é único. De fato, se $\square$ é outro vetor com a mesma propriedade, então

$$\square = \square + 0 = 0 + \square = 0.$$

Da mesma forma, o simétrico do vetor $\mathbf{u}, -\mathbf{u}$, também é único: se $\mathbf{u} + \mathbf{v} = 0$, então

$$\mathbf{v} = \mathbf{v} + 0 = \mathbf{v} + (\mathbf{u} + (-\mathbf{u})) = (\mathbf{v} + \mathbf{u}) + (-\mathbf{u}) =$$
$$= (\mathbf{u} + \mathbf{v}) + (-\mathbf{u}) = 0 + (-\mathbf{u}) = -\mathbf{u} + 0 = -\mathbf{u}.$$

**Exercício 5.13** *Tente provar que $\mathbf{u} + \mathbf{u} = 2\mathbf{u}$ sem usar a propriedade (8).*

**Observação**: O leitor que não se assustou com a ideia de escalares complexos, pode incluir na definição a alternativa de que os escalares estejam não em $\mathbb{R}$, mas em $\mathbb{C}$. O leitor com familiaridade com o conceito de corpo pode considerar, na definição, que, junto com o conjunto V dos vetores, é dado também o corpo $K$ dos escalares, e que a operação de multiplicação por escalares está definida não em $\mathbb{R} \times \mathbf{V}$, mas em $K \times \mathbf{V}$ (o que inclui, claro, as possibilidades $K = \mathbb{R}$ e $K = \mathbb{C}$). Salvo menção explícita em contrário, suporem sempre que nossos espaços vetoriais são reais.

Um **subespaço vetorial** do espaço vetorial $\mathbf{V}$ é um subconjunto de $\mathbf{V}$ que, com as operações que "herda" de $\mathbf{V}$, é um espaço vetorial. A definição abaixo é mais operacional.