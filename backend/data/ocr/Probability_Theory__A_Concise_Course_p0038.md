To prove (3.6), we need only note that

$$\bigcup_k B_k = \Omega,$$

where $\Omega$ is the whole sample space, since one of the events $B_1, B_2, \ldots$ must occur. But then

$$A = \bigcup_k AB_k,$$

and hence

$$\mathbf{P}(A) = \mathbf{P}\left(\bigcup_k AB_k\right) = \sum_k \mathbf{P}(AB_k) = \sum_k \frac{\mathbf{P}(AB_k)}{\mathbf{P}(B_k)} \mathbf{P}(B_k),$$

which is equivalent to (3.6).

**Example 1.** A hiker leaves the point $O$ shown in Figure 3, choosing one of the roads $OB_1, OB_2, OB_3, OB_4$ at random. At each subsequent crossroads he again chooses a road at random. What is the probability of the hiker arriving at the point $A$?

**Solution.** Let the event that the hiker passes through the point $B_k$, $k = 1, \ldots, 4$, be denoted by the same symbol $B_k$ as the point itself. Then $B_1, B_2, B_3, B_4$ form a “full set” of mutually exclusive events, since the hiker must pass through one of these points. Moreover, the events $B_1, B_2, B_3, B_4$ are equiprobable, since, by hypothesis, the hiker initially makes a completely random choice of one of the roads $OB_1, OB_2, OB_3, OB_4$. Therefore

$$\mathbf{P}(B_k) = \frac{1}{4}, \quad k = 1, \ldots, 4.$$

Once having arrived at $B_1$, the hiker can proceed to $A$ only by making the proper choice of one of three equiprobable roads. Hence the conditional probability of arriving at $A$ starting from $B_1$ is just $\frac{1}{3}$. Let the event that the