$$det \begin{pmatrix} y_1 & a_{12} & a_{13} \\ y_2 & a_{22} & a_{23} \\ y_3 & a_{32} & a_{33} \end{pmatrix} =$$

$$= det \begin{pmatrix} x_1 \begin{pmatrix} a_{11} \\ a_{21} \\ a_{31} \end{pmatrix} + x_2 \begin{pmatrix} a_{12} \\ a_{22} \\ a_{32} \end{pmatrix} + x_3 \begin{pmatrix} a_{13} \\ a_{23} \\ a_{33} \end{pmatrix} & a_{12} & a_{13} \\ a_{22} & a_{23} & a_{32} \\ a_{32} & a_{33} \end{pmatrix} =$$

$$= x_1 det \begin{pmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{pmatrix} +$$

$$+ x_2 det \begin{pmatrix} a_{12} & a_{12} & a_{13} \\ a_{22} & a_{22} & a_{23} \\ a_{32} & a_{32} & a_{33} \end{pmatrix} + x_3 det \begin{pmatrix} a_{13} & a_{12} & a_{13} \\ a_{23} & a_{22} & a_{23} \\ a_{33} & a_{32} & a_{33} \end{pmatrix} =$$

$$= x_1 det \begin{pmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{pmatrix}$$

Logo, se o determinante da matriz $(a_{ij})$ (também chamado de determinante do sistema) for não nulo, temos:

$$x_1 = \frac{det \begin{pmatrix} y_1 & a_{12} & a_{13} \\ y_2 & a_{22} & a_{23} \\ y_3 & a_{32} & a_{33} \end{pmatrix}}{det \begin{pmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{pmatrix}}.$$

Esta é a chamada **fórmula de Cramer** para a solução $x_1$ do sistema.

**Exercício 10.20** Obtenha a fórmula de Cramer para $x_2$ e para $x_3$.

**Observação:** Nosso estudo de determinantes foi apresentado de um ponto de vista absolutamente geométrico. Por uma questão de honestidade histórica, devemos salientar que a origem do conceito é algébrica (**Cardano**, dá a expressão para o caso $2 \times 2$ (1545)); **Leibniz** trabalha com a ideia (1693) e **Seki Kowa**, na mesma época, obtém resultados semelhantes (casos $3 \times 3$ e $4 \times 4$, com boas tentativas para o caso $n \times n$); a ideia vai ser detalhadamente desenvolvida por **MacLaurin** (1748) e Cramer(1750); a fórmula dita de Cramer foi obtida, de forma independente e um pouco antes, por MacLaurin). A utilização de determinantes para o cálculo de áreas e volumes é posterior (Lagrange (1773), Cauchy (1812)).