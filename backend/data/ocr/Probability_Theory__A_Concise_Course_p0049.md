where $p_{\xi}(x)$ is a nonnegative integrable function, called the probability density of the random variable $\xi$, with unit integral

$$\int_{-\infty}^{\infty} p_{\xi}(x) \, dx = 1.$$

Clearly, if $\xi$ is a continuous random variable, then

$$\mathbf{P}\{\xi = x\} = 0$$

for any given value $x$, while

$$\mathbf{P}\{\xi \in dx\} \sim p_{\xi}(x) \, dx$$

for every $x$ with a neighborhood in which the probability density $p_{\xi}(x)$ is continuous. Here $\mathbf{P}\{\xi \in dx\}$ is the probability of the event $\{\xi \in dx\}$, consisting of $\xi$ taking any value in an infinitesimal interval $dx$ centered at the point $x$.

The function

$$\Phi_{\xi}(x) = \mathbf{P}\{\xi \leqslant x\}, \quad -\infty < x < \infty$$

is called the distribution function of the random variable $\xi$. If $\xi$ is a discrete random variable, $\Phi_{\xi}(x)$ is the step function

$$\Phi_{\xi}(x) = \sum_{-\infty}^{\infty} p_{\xi}(x),$$

taking a finite or countably infinite number of distinct values [the graph of such a function is shown in Figure 4(a)]. If $\xi$ is a continuous random variable, $\Phi_{\xi}(x)$ is the continuous function

$$\Phi_{\xi}(x) = \int_{-\infty}^{x} p_{\xi}(x) \, dx$$

[the graph of such a function is shown in Figure 4(b)]. Clearly,

$$\mathbf{P}\{x' < \xi \leqslant x''\} = \Phi_{\xi}(x'') - \Phi_{\xi}(x')$$

for any random variable $\xi$.

Now consider two random variables $\xi_1$ and $\xi_2$, or equivalently, the random point or vector $\xi = (\xi_1, \xi_2)$. First suppose $\xi_1$ and $\xi_2$ are discrete. Then $\xi_1$ and $\xi_2$ have a joint probability distribution, characterized by the probabilities

$$p_{\xi_1,\xi_2}(x_1, x_2) = \mathbf{P}\{\xi_1 = x_1, \xi_2 = x_2\},$$

where $x_1$ and $x_2$ range over all possible values of the corresponding random