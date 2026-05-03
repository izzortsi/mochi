Vamos tratar nossa função $d$, agora, através de certas propriedades notáveis. Vamos ver que tais propriedades caracterizam d e nos permitem deduzir uma expressão simples para seu cálculo.

$d$ é uma função que a cada par (ordenado) $\vec{u}, \vec{v}$ de vetores do plano associa um número real $d(\vec{u}, \vec{v})$, com as seguinte propriedades:

$(i) d(\vec{u}, \vec{v}) = -d(\vec{v}, \vec{u}) \quad \forall \vec{u}, \vec{v} \in \mathbb{R}^2$;
$(ii) d(t\vec{u}, \vec{v}) = td(\vec{u}, \vec{v}) \quad \forall \vec{u}, \vec{v} \in \mathbb{R}^2, \forall t \in \mathbb{R}$;
$(iii) d(\vec{u}, \vec{v}_1 + \vec{v}_2) = d(\vec{u}, \vec{v}_1) + d(\vec{u}, \vec{v}_2) \quad \forall \vec{u}, \vec{v}_1, \vec{v}_2 \in \mathbb{R}^2$;
$(iv) d(\vec{e}_1, \vec{e}_2) = 1$.

As propriedades (i), (ii) e (iii) foram discutidas na seção precedente; a propriedade (iv) parece óbvia, mas não teríamos como deduzi-la das demais. Três outras propriedades com as quais contamos podem ser deduzidas de (i), (ii) e (iii):

$(i)' d(\vec{u}, \vec{u}) = 0 \quad \forall \vec{u}$;
$(ii)' d(\vec{u}, t\vec{v}) = td(\vec{u}, \vec{v}) \quad \forall \vec{u}, \vec{v} \in \mathbb{R}^2, \forall t \in \mathbb{R}$;
$(iii)' d(\vec{u}_1 + \vec{u}_2, \vec{v}) = d(\vec{u}_1, \vec{v}) + d(\vec{u}_2, \vec{v}) \quad \forall \vec{u}_1, \vec{u}_2, \vec{v} \in \mathbb{R}^2$.

As demonstrações são simples e puramente algébricas:

(i)' segue do fato que $d(\vec{u}, \vec{u}) = -d(\vec{u}, \vec{u})$ (por (i));

(ii)' se deduz notando que, por (i) e (ii), $d(\vec{u}, t\vec{v}) = -d(t\vec{v}, \vec{u}) = -t(-d(\vec{u}, \vec{v})) = td(\vec{u}, \vec{v})$.

**Exercício 10.7** Prove (iii)' usando apenas (i) e (iii).

Vamos agora, sem mais delongas, proceder ao cálculo de $d(\vec{u}, \vec{v})$, usando as propriedades acima. Sendo $\vec{u} = (x_1, y_1) = x_1\vec{e}_1 + y_1\vec{e}_2$, $\vec{v} = (x_2, y_2) = x_2\vec{e}_1 + y_2\vec{e}_2$, temos: