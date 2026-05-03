Menos evidente é a **desigualdade triangular**, $|q_1 + q_2| \leq |q_1| + |q_2|$, que decorre de ser $\langle q_1, q_2 \rangle = t_1 t_2 + \langle v_1, v_2 \rangle$ um produto escalar e da desigualdade de Cauchy-Schwarz-Buniacóvsqui (aqui, $q_1 = t_1 + v_1$, $q_2 = t_2 + v_2$ e $\langle v_1, v_2 \rangle$ é o produto escalar usual em $R^3$). Mas a propriedade mais emocionante é dada na Proposição a seguir.

**Proposição:** Dados dois quatérnions, $q_1$ e $q_2$, vale

$$|q_1 q_2| = |q_1| |q_2|.$$

Demonstração: Escrevendo $q_1 = r + \vec{u}$ e $q_2 = s + \vec{v}$, temos:

$$|q_1 q_2|^2 = |rs + r\vec{v} + s\vec{u}|^2 < \vec{u}, \vec{v} > + \vec{u} \otimes \vec{v}|^2 =$
$$= |rs - < \vec{u}, \vec{v} >|^2 + |r\vec{v} + s\vec{u}|^2 + |\vec{u} \otimes \vec{v}|^2 =$
$$= (rs)^2 - 2rs < \vec{u}, \vec{v} > + < r\vec{v} + s\vec{u}, r\vec{v} + s\vec{u} > + < \vec{u}, \vec{v} >^2 + |\vec{u} \otimes \vec{v}|^2 =$
$$= r^2 s^2 + r^2 |\vec{v}|^2 + s^2 |\vec{u}|^2 + |\vec{u}|^2 |\vec{v}|^2 = |q_1|^2 |q_2|^2.$$

**Exercício 11.10** Mostre que, dados dois quatérnions, $q_1$ e $q_2$, vale $(q_1 q_2)' = q_2' q_1'$.

### 11.6 Quatérnions e rotações

Consideremos o problema de rodar os pontos do espaço, de um ângulo $\theta$, em torno do eixo passando pela origem e dado pelo vetor $\vec{u}$. Vamos supor, para facilitar as contas, que $\vec{u}$ é unitário. Suporemos, também, que, "visto de $\vec{u}$", o plano $\alpha$, perpendicular a $\vec{u}$ e passando pela origem, roda no sentido trigonométrico. Chamaremos de $R$ a transformação que associa, a cada vetor $\vec{v}$, seu rodado.

Seja $\vec{v}$ um vetor qualquer. Comecemos decompondo $\vec{v}$ como soma de um vetor $\vec{v}_0$, na direção de $\vec{u}$, e outro, $\vec{w}$, perpendicular a $\vec{u}$, isto é, em $\alpha$. Usando o produto escalar, temos:

$$\vec{v}_0 = < \vec{v}, \vec{u} > \vec{u}.$$

**Exercício 11.11** Verifique que $R\vec{v} = \vec{v}_0 + R\vec{w}$.

Agora, vamos usar o produto vetorial de maneira um pouco menos evidente:

$$\vec{u} \otimes \vec{v} = \vec{u} \otimes (\vec{w} + \vec{v}_0) = \vec{u} \otimes \vec{w}.$$

Chamando $\vec{u} \otimes \vec{v}$ de $\vec{w}^\perp$, temos $\vec{w} = \vec{w}^\perp \otimes \vec{u}$ e $R\vec{w} = \cos \theta \vec{w} + \sin \theta \vec{w}^\perp$. Assim,

$$R\vec{v} = < \vec{v}, \vec{u} > \vec{u} + \cos \theta (\vec{u} \otimes \vec{v}) \otimes \vec{u} + \sin \theta \vec{u} \otimes \vec{v}.$$