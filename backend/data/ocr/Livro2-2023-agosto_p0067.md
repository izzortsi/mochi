8.4: Bases ortonormais e projeções

Figura 8.3:

(a) $\langle \mathbf{v} - \bar{\mathbf{v}}, \mathbf{w} \rangle = 0 \ \forall \mathbf{w} \in \mathbf{V}_0$;
(b) $|\mathbf{v} - \bar{\mathbf{v}}| \leq |\mathbf{v} - \mathbf{w}| \ \forall \mathbf{w} \in \mathbf{V}_0$;
(c) se $\mathbf{v}_0$ pertence a $\mathbf{V}_0$ e $|\mathbf{v} - \mathbf{v}_0| \leq |\mathbf{v} - \mathbf{w}| \ \forall \mathbf{w} \in \mathbf{V}_0$, então $\mathbf{v}_0 = \bar{\mathbf{v}}$.

Demonstração:

1. Se $0 = x_1\varepsilon_1 + \cdots + x_M\varepsilon_M$, então, multiplicando escalarmente por $\varepsilon_i$ dos dois lados, temos:

$$0 = \langle x_1\varepsilon_1 + \cdots + x_M\varepsilon_M, \varepsilon_i \rangle = x_1 \langle \varepsilon_1, \varepsilon_i \rangle + \cdots + x_M \langle \varepsilon_M, \varepsilon_i \rangle = x_i \langle \varepsilon_i, \varepsilon_i \rangle.$$

Como $\varepsilon_i \neq 0$, temos $\langle \varepsilon_i, \varepsilon_i \rangle \neq 0$, o que nos dá $x_i = 0$ e demonstra a independência linear de $\varepsilon_1, \cdots, \varepsilon_M$.

2. Sejam $\mathbf{v}$ um elemento de $\mathbf{V}$ e $\bar{\mathbf{v}}$ definido como acima. Seja $\mathbf{u} = \mathbf{v} - \bar{\mathbf{v}}$. Então:

(a) Para cada $i = 1, \ldots, M$, temos

$$\langle \mathbf{u}, \varepsilon_i \rangle = \langle \mathbf{v}, \varepsilon_i \rangle - \langle x_1\varepsilon_1 + \cdots + x_M\varepsilon_M, \varepsilon_i \rangle = \langle \mathbf{v}, \varepsilon_i \rangle - x_i \langle \varepsilon_i, \varepsilon_i \rangle =$$

$$= \langle \mathbf{v}, \varepsilon_i \rangle - \frac{\langle \mathbf{v}, \varepsilon_i \rangle}{\langle \varepsilon_i, \varepsilon_i \rangle} \langle \varepsilon_i, \varepsilon_i \rangle = 0.$$

Como $\varepsilon_1, \cdots, \varepsilon_M$ formam base de $\mathbf{V}_0$, isso mostra que $\langle \mathbf{v} - \bar{\mathbf{v}}, \mathbf{w} \rangle = 0 \ \forall \mathbf{w} \in \mathbf{V}_0$

(b) Se $\mathbf{w}$ está em $\mathbf{V}_0$, então $\mathbf{w} - \bar{\mathbf{v}}$ está em $\mathbf{V}_0$ e é, portanto, ortogonal a $\mathbf{u}$. Segue do Teorema de Pitágoras que $|\mathbf{v} - \mathbf{w}|^2 = |\mathbf{u}|^2 + |\mathbf{w} - \bar{\mathbf{v}}|^2$, o que prova que $|\mathbf{v} - \mathbf{w}| \geq |\mathbf{u}|$

(c) A demonstração do item anterior prova, também, que se $\mathbf{v}_0$ está em $\mathbf{V}_0$ e $\mathbf{v}_0 \neq \bar{\mathbf{v}}$, então $|\mathbf{v} - \mathbf{v}_0| > |\mathbf{u}|$.

Definição: Sejam $\mathbf{V}$ um espaço vetorial com produto interno, $\mathbf{v}$ um elemento de $\mathbf{V}$ e $\mathbf{V}_0$ um subespaço vetorial de $\mathbf{V}$. O vetor $\bar{\mathbf{v}}$ de $\mathbf{V}_0$ é chamado de **projeção ortogonal** de $\mathbf{v}$ sobre $\mathbf{V}_0$ se