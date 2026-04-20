hiker arrives at $A$ be denoted by the same symbol $A$ as the point itself. Then

$$\mathbf{P}(A \mid B_1) = \frac{1}{3}.$$

and similarly

$$\mathbf{P}(A \mid B_2) = \frac{1}{2}, \quad \mathbf{P}(A \mid B_3) = 1, \quad \mathbf{P}(A \mid B_4) = \frac{2}{5}$$

(consult the figure). It follows from (3.6) that the probability of arriving at $A$ is

$$\mathbf{P}(A) = \mathbf{P}(A \mid B_1)\mathbf{P}(B_1) + \mathbf{P}(A \mid B_2)\mathbf{P}(B_2) + \mathbf{P}(A \mid B_3)\mathbf{P}(B_3) + \mathbf{P}(A \mid B_4)\mathbf{P}(B_4)$$

$$= \frac{1}{4}\left(\frac{1}{3} + \frac{1}{2} + \frac{2}{5}\right) = \frac{67}{120}.$$

**Example 2 (The optimal choice problem).** Consider a set of $m$ objects, all of different quality, such that it is always possible to tell which of a given pair of objects is better. Suppose the objects are presented one at a time and at random to an observer, who at each stage either selects the object, thereby designating it as “the best” and examining no more objects, or rejects the object once and for all and examines another one. (Of course, the observer may very well make the mistake of rejecting the best object in the vain hope of finding a better one!) For example, the observer may be a fussy young lady and the objects a succession of $m$ suitors. At each stage, she can either accept the suitor’s proposal of marriage, thereby terminating the process of selecting a husband, or she may reject him (thereby losing him forever) and wait for a better prospect to come along. It will further be assumed that the observer adopts the following natural rule for selecting the best object: “Never select an object inferior to those previously rejected.” Then the observer can select the first object and stop looking for a better one, or he can reject the first object and examine further objects one at a time until he finds one better than those previously examined. He can then select this object, thereby terminating the inspection process, or he can examine further objects in the hope of eventually finding a still better one, and so on. Of course, it is entirely possible that he will reject the very best object somewhere along the line, and hence never be able to make a selection at all. On the other hand, if the number of objects is large, almost anyone would reject the first object in the hope of eventually finding a better one.

Now suppose the observer, following the above “decision rule,” selects the $i$th inspected object once and for all, giving up further inspection. (The $i$th object must then be better than the $i-1$ previously inspected objects.) What is the probability that this $i$th object is actually the best of all $m$ objects, both inspected and uninspected?