of “service calls” (requests for service) arriving randomly at some “server” (service facility), like inquiries at an information desk, arrival of motorists at a gas station, telephone calls at an exchange, etc. Let $\xi(\Delta)$ be the number of events occurring during the time interval $\Delta$. Then what is the distribution of the random variable $\xi(\Delta)$?

To answer this question, we will assume that our “random flow of events” has the following three properties:

a) The events are independent of one another; more exactly, the random variables $\xi(\Delta_1), \xi(\Delta_2), \ldots$ are independent if the intervals $\Delta_1, \Delta_2, \ldots$ are nonoverlapping.

b) The flow of events is “stationary,” i.e., the distribution of the random variable $\xi(\Delta)$ depends only on the length of the interval $\Delta$ and not on the time of its occurrence (the initial time of $\Delta$, say).

c) The probability that at least one event occurs in a small time interval $\Delta t$ is $\lambda \Delta t + o(\Delta t)$, while the probability that more than one event occurs in $\Delta t$ is $o(\Delta t)$. Here $o(\Delta t)$ is an infinitesimal of higher order than $\Delta t$, i.e.,

$$\lim_{\Delta t \to 0} \frac{o(\Delta t)}{\Delta t} = 0,$$

and $\lambda$ is a positive parameter characterizing the “rate of occurrence” or “density” of the events.

Now consider the time interval $\Delta = [0, t]$, and let $\xi(t)$ be the total number of events occurring in $[0, t]$. Dividing $[0, t]$ into $n$ equal parts $\Delta_1, \ldots, \Delta_n$, we find that

$$\xi(t) = \sum_{k=1}^{n} \xi(\Delta_k),$$

where $\xi(\Delta_1), \ldots, \xi(\Delta_n)$ are independent random variables and $\xi(\Delta_k)$ is the number of events occurring in the interval $\Delta_k$. Clearly, the generating function of each random variable $\xi(\Delta_k)$ is

$$F_n(z) = \left(1 - \frac{\lambda t}{n}\right) + \frac{\lambda t}{n} z + o\left(\frac{t}{n}\right),$$

where $o(t/n)$ is a term of order higher than $t/n$. Hence, by (6.7), the generating function of $\xi(t)$ is

$$F(z) = [F_n(z)]^n = \left[1 + \frac{\lambda t(z-1)}{n} + o\left(\frac{t}{n}\right)\right]^n.$$

But $F(z)$ is independent of the subintervals $\Delta_1, \ldots, \Delta_n$, and hence we can take the limit as $n \to \infty$, obtaining

$$F(z) = \lim_{n \to \infty} \left[1 + \frac{\lambda t(z-1)}{n}\right]^n = e^{\lambda t(z-1)}.$$