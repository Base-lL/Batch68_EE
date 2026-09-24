the equation of RMS for a voltage function is:
$$
V_{rms} = \sqrt{\frac{1}{T}\int^T_0 \left[v(t)\right]^2 dt}
$$
for a full cycle, that is $T = 2\pi$. we then work with the voltage as a function of angle $\theta$:

$$
V_{rms} = \sqrt{\frac{1}{2\pi}\int^{2\pi}_0 \left[v(\theta)\right]^2 d\theta}
$$

let the half-wave function be defined as:
$$
v(\theta) = 
\begin{cases} 
  V_m \sin(\theta) & \text{if } 0 \le x < \pi \\ 
  0 & \text{if }  \pi \le x < 2\pi 
\end{cases}
$$
substitute the function parts:
$$
V_{rms} = \sqrt{\frac{1}{2\pi}\left[\int^{\pi}_0 \left( V_m \sin\theta \right)^2 d\theta + \cancel{\int^{2\pi}_{\pi} \left( 0 \right)^2} d\theta \right]}
$$

$$
V_{rms} = \sqrt{\frac{1}{2\pi}\int^{\pi}_0 V_m^2 \sin^2 \theta \,d\theta}
$$

$$
V_{rms} = \sqrt{\frac{V_m^2}{2\pi} \int_{0}^{\pi} \sin^2 \theta \, d\theta}
$$
<br>using the trigonometric identity $\sin^2 \theta = \dfrac{1-\cos(2\theta)}{2}$  <br>

$$
V_{rms} = \sqrt{\frac{V_m^2}{4\pi} \int_{0}^{\pi} 1 - \cos(2\theta) \, d\theta}
$$

focusing on the integral:
$$
\int_{0}^{\pi} (1 - \cos(2\theta)) \, d\theta = \left[ \theta - \frac{\sin(2\theta)}{2} \right]_{0}^{\pi}
$$

$$
\left[ \theta - \frac{\sin(2\theta)}{2} \right]_{0}^{\pi} = \left( \pi - \frac{\sin(2\pi)}{2} \right) - \left( 0 - \frac{\sin(0)}{2} \right) = \pi
$$
substitute back to the equation
$$
V_{rms} = \sqrt{\frac{V_m^2}{4\pi} \cdot\pi}
$$

$$
V_{rms} = \sqrt{\frac{V_m^2}{4}}
$$
and so we get our final equation:
$$
V_{rms} = \frac{V_m}{2}
$$