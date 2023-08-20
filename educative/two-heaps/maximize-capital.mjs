/*
Statement:
A busy investor with an initial capital, c, needs an automated investment program.
They can select k distinct projects from a list of n projects with corresponding capitals requirements and expected profits.
For a given project i, its capital requirement is capitals[i], and the profit it yields is profits[i].
The goal is to maximize their cumulative capital by selecting a maximum of k distinct projects to invest in,
subject to the constraint that the investor’s current capital must be greater than or equal to the capital requirement
of all selected projects. When a selected project from the identified ones is finished,
the pure profit from the project, along with the starting capital of that project is returned to the investor.
This amount will be added to the total capital held by the investor.
Now, the investor can invest in more projects with the new total capital.
It is important to note that each project can only be invested once.
As a basic risk-mitigation measure, the investor wants to limit the number of projects they invest in.
For example, if k is 2, the program should identify the two projects that maximize the investor’s profits
while ensuring that the investor’s capital is sufficient to invest in the projects.
Overall, the program should help the investor to make informed investment decisions by picking a list of a maximum of k distinct projects
to maximize the final profit while mitigating the risk.


Test: 
c - capital,
k - number of projects to take,
n - number of all projects,
capitals[i] - capital requirements,
profits[i] - project's profit,

Input: 1, 2, [1, 2, 2, 4], [2, 3, 4, 7]
Output: 7

Input: 1, 2, [1, 2, 2, 3], [2, 4, 6, 8]
Output: 11


Complexity:
T: O(n logn)
S: O(n)
*/

import { Heap } from '../../data-structures/heap/heap.mjs'

export function maximumCapital(c, k, capitals, profits){
    // 1. Create max heap
    // 2. Iterate through capitals array
    // 3. Add projects with suitable capitals to the heap, sorted by profits
    // 4. Pull the head of the heap (most profitable project)
    // 5. Summarize current capital with profit
    // 6. Go through steps 3 - 5 k times
    // 7. Return maxCapital
    
    const profitsHeap = new Heap([], (a, b) => b - a);
    let maxCapital = c;
    let capitalsPointer = 0;

    for (let i = 0; i < k; i++) {
        while (capitalsPointer < capitals.length) {
            if (capitals[capitalsPointer] > maxCapital) {
                break;
            }

            profitsHeap.offer(profits[capitalsPointer]);
            capitalsPointer++;
        }

        maxCapital += profitsHeap.poll();
    }

    return maxCapital;
}