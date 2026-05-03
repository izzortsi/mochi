As duas funções

$$y = \phi_1(t) = \sqrt{1 - t^2} \quad \text{e} \quad y = \phi_2(t) = -\sqrt{1 - t^2}$$

satisfazem a relação, isto é

$$t^2 + \phi_1^2 - 1 = 0 \quad \text{e} \quad t^2 + \phi_2^2 - 1 = 0.$$

$\phi_1(t)$ e $\phi_2(t)$ são duas soluções explicitas definidas no intervalo $1 \leq t \leq 1$.

**Observação:** Considere o sistema de equações diferencias

$$\frac{dx}{dt} = f(x)$$

(1)

onde $f : \mathbb{R} \longrightarrow \mathbb{R}$. Uma solução deste sistema é a função

$$x : J \longrightarrow \mathbb{R}$$

definida em $J \subset \mathbb{R}$ tal que para todo $t \in J$,

$$\frac{dx}{dt} = f(x(t)).$$

Vamos denotar $x' = dx/dt$. Geometricamente, $x(t)$ é a curva em $\mathbb{R}$ cujo vetor tangente $x'(t)$ existe para todo $t \in J$ e é igual a $f(x(t))$.

Uma condição inicial ou valor inicial para a solução $x : J \longrightarrow \mathbb{R}$ é o dado $x(t_o) = x_o$, onde $t_o \in J$ e $x_o \in \mathbb{R}$. Para simplificar a notação, escolhemos $t_o = 0$. O problema principal das equações diferencias é de encontrar a solução de qualquer problema de valor inicial; i.e., de encontrar a solução do sistema que verifica a condição inicial $x(0) = x_o$ para todo $x_o \in \mathbb{R}$.

Infelizmente, equações não-lineares podem não ter uma solução que verifique uma dada condição inicial.

**Existência de uma solução:** A equação diferencial

$$\frac{dy}{dt} = f(t,y)$$

com dado inicial

$$y(t_o) = y_o$$

tem solução ?

Em outras palavras: alguma curva integral passa pelo ponto $(t_o, y_o)$ do plano $ty$?

**Unicidade de uma solução:** Quando podemos estar certos de que existe precisamente