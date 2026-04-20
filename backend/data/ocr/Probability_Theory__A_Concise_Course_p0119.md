Example 2 (A service system with exponential holding times). Consider a random flow of service calls arriving at a server, where the incoming “traffic” is of the Poisson type described in Example 1, with density $\lambda$. Thus $\lambda \Delta t + o(\Delta t)$ is the probability that at least one call arrives in a small time interval $\Delta t$. Suppose it takes a random time $\tau$ to service each incoming call, where $\tau$ has an exponential distribution with parameter $\mu$:

$$P\{\tau > t\} = e^{-\mu t}$$

(the case of “exponential holding times”). Then the service system has two states, a state $\varepsilon_0$ if the server is “free” and a state $\varepsilon_1$ if the server is “busy.” It will be assumed that a call is rejected (and is no longer a candidate for service) if it arrives when the server is busy.

Suppose the system is in the state $\varepsilon_0$ at time $t_0$. Then its subsequent behavior does not depend on its previous history, since the calls arrive independently. The probability $p_{01}(\Delta t)$ of the system going from the state $\varepsilon_0$ to the state $\varepsilon_1$ during a small time interval $\Delta t$ is just the probability $\lambda \Delta t + o(\Delta t)$ of at least one call arriving during $\Delta t$. Hence the density of the transition from $\varepsilon_0$ to $\varepsilon_1$ equals $\lambda$. On the other hand, suppose the system is in the state $\varepsilon_1$ at time $t_1$. Then the probability $p_{10}(t)$ of the system going from the state $\varepsilon_1$ to the state $\varepsilon_0$ after a time $t$ is just the probability that service will fail to last another $t$ seconds. Suppose that at the time $t_1$, service has already been in progress for exactly $s$ seconds. Then

$$p_{10}(t) = 1 - P\{\tau > s + t \mid \tau > s\} = 1 - \frac{P\{\tau > s + t\}}{P\{\tau > s\}}.$$

Using (8.20), we find that

$$p_{10}(t) = 1 - \frac{e^{-\mu(s+t)}}{e^{-\mu s}} = 1 - e^{-\mu t},$$

regardless of the time $s$, i.e., regardless of the system’s behavior before the time $t_1$. Hence the system can be described by a Markov process, with two states $\varepsilon_0$ and $\varepsilon_1$.

The transition probabilities of this Markov process obviously satisfy the conditions

$$p_{01}(t) = 1 - p_{00}(t), \quad p_{10}(t) = 1 - p_{11}(t).$$

Moreover,

$$\lambda_{00} = -\lambda, \quad \lambda_{01} = \lambda,$$

$$\lambda_{10} = \mu, \quad \lambda_{11} = -\mu,$$

---

6 For simplicity, we choose seconds as the time units.

7 It is important to note that this is true only for exponential holding times (see W. Feller, op. cit., p. 458).