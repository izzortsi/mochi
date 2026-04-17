2) A matriz canônica A do Exemplo 2 do item 4.4 é ortogonal, pois

$$A = \begin{bmatrix} \cos \theta & -\sin \theta \\ \sin \theta & \cos \theta \end{bmatrix} \quad \therefore A^t = \begin{bmatrix} \cos \theta & \cos \theta \\ -\sin \theta & \cos \theta \end{bmatrix} = A^{-1},$$

(ver Apêndice, Probl. 3, A. 29.1.1)

II) As colunas (ou linhas) de uma matriz ortogonal são vetores ortonormais. Seja uma matriz ortogonal de ordem 2:

$$A = \begin{bmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{bmatrix}$$

Pretende-se provar que os vetores-coluna

$$\mu_1 = \begin{bmatrix} a_{11} \\ a_{21} \end{bmatrix} \text{ e } \mu_2 = \begin{bmatrix} a_{12} \\ a_{22} \end{bmatrix}$$

são ortonormais. Calculando $A^t A$, tem-se:

$$A^t A = \begin{bmatrix} a_{11} & a_{21} \\ a_{12} & a_{22} \end{bmatrix} \begin{bmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{bmatrix} = \begin{bmatrix} a_{11} a_{11} + a_{21} a_{21} & a_{11} a_{12} + a_{21} a_{22} \\ a_{12} a_{11} + a_{22} a_{21} & a_{12} a_{12} + a_{22} a_{22} \end{bmatrix}$$

$$= \begin{bmatrix} \mu_1 \cdot \mu_1 & \mu_1 \cdot \mu_2 \\ \mu_2 \cdot \mu_1 & \mu_2 \cdot \mu_2 \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$$

Tendo em vista que $\mu_i \cdot \mu_j = \begin{cases} 1 \text{ para } i = j \\ 0 \text{ para } i \neq j, \end{cases}$

os vetores $\mu_1 \text{ e } \mu_2$ são ortonormais

Estes vetores formam, consequüentemente, uma base ortonormal do espaço vetorial correspondente. Por outro lado, os vetores-coluna de uma base ortonormal determinam uma matriz ortogonal.