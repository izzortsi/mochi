Exercício 12.6 Mostre que a transformação $T$ definida acima é linear.

Exercício 12.7 Mostre que toda transformação linear $T : V \rightarrow V$ cabe no exemplo acima. Solução: considere uma transformação linear $T : V \rightarrow V$; defina $\vec{\epsilon}_1$, $\vec{\epsilon}_2$ e $\vec{\epsilon}_3$ por $\vec{\epsilon}_1 = T\vec{e}_1$, $\vec{\epsilon}_2 = T\vec{e}_2$, $\vec{\epsilon}_3 = T\vec{e}_3$; faça as contas.

Exercício 12.8 Pense o exemplo 1 em termos do exemplo 2. Expresse os vetores $\vec{\epsilon}_1$, $\vec{\epsilon}_2$ e $\vec{\epsilon}_3$ em termos dos coeficientes do sistema.

Os exemplo 1 e 2 abarcam tudo, são gerais demais. Sejamos mais específicos.

Exemplo 3: Consideremos uma rotação do espaço em torno do eixo vertical. Convença-se de que trata-se de uma transformação linear. Chamando de $\theta$ o ângulo de rotação (no sentido trigonométrico, olhando de cima), teremos:

$$T\vec{e}_1 = \cos \theta\vec{e}_1 + \sin \theta\vec{e}_2, \quad T\vec{e}_2 = -\sin \theta\vec{e}_1 + \cos \theta\vec{e}_2, \quad T\vec{e}_3 = \vec{e}_3.$$

Assim, se o vetor $\vec{v}$ é dado, em coordenadas canônicas, por $(x,y,z)$, então

$$T\vec{v} = T(x\vec{e}_1 + y\vec{e}_2 + z\vec{e}_3) = xT\vec{e}_1 + yT\vec{e}_2 + zT\vec{e}_3 =$$
$$= x(\cos \theta\vec{e}_1 + \sin \theta\vec{e}_2) + y(-\sin \theta\vec{e}_1 + \cos \theta\vec{e}_2) + z\vec{e}_3 =$$
$$= (x\cos \theta - y\sin \theta)\vec{e}_1 + (x\sin \theta + y\cos \theta)\vec{e}_2 + z\vec{e}_3.$$

Exercício 12.9 Conclua que a imagem do vetor de coordenadas (na base canônica) $(x,y,z)$ é dada, em coordenadas, por

$$(x\cos \theta - y\sin \theta, x\sin \theta + y\cos \theta, z).$$

Se você sabe multiplicar matrizes, observe que, se $(x',y',z')$ são as coordenadas da imagem, então

$$\begin{pmatrix} x' \\ y' \\ z' \end{pmatrix} = \begin{pmatrix} \cos \theta & -\sin \theta & 0 \\ \sin \theta & \cos \theta & 0 \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix}.$$

Exercício 12.10 Seja $T$ a transformação linear dada pela rotação do espaço em torno do eixo que passa pela origem e tem a direção de um vetor $\vec{v}$ qualquer. Os casos $\vec{v} = \vec{e}_2$ e $\vec{v} = \vec{e}_3$ são, claro, análogos ao exemplo 3. Suponha que $\vec{v}$ seja dado, em coordenadas canônicas, por $\vec{v} = (a,b,c)$. Como obter as coordenadas, na base canônica, da imagem por $T$ de um vetor $\vec{u}$ de coordenadas $(x,y,z)$?

Exemplo 4: Considere a seguinte transformação: um vetor horizontal $\vec{\epsilon}$ é fixado (isto é, $\epsilon$ é combinação linear de $\vec{e}_1$ e $\vec{e}_2$). Cada ponto do espaçoanda um pouco na direção dada por $\vec{\epsilon}$; o quanto ainda é proporcional a sua altura. Mais precisamente, fixamos um número $\alpha$; cada vetor $\vec{v} = x\vec{e}_1 + y\vec{e}_2 + z\vec{e}_3$ é, então, levado em $T\vec{v} = \vec{v} + \alpha z\vec{\epsilon}$. Uma tal transformação é dita um cisalhamento (horizontal, na direção do vetor $\vec{\epsilon}$).

Exercício 12.11 Mostre que nossa transformação faz com que os planos horizontais se desloquem sobre si mesmos. Isto é: para cada $z_0$, os pontos do plano horizontal de altura $z_0$ sofrem, todos, uma mesma translação (qual?).

Exercício 12.12 Mostre que cisalhamentos preservam volumes.