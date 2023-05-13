class CirSim{
	 converged=false;
	 subIterations=0;

	init() {
		throw new Error("Method not implemented.");
	}
	setCanvasSize() {
		throw new Error("Method not implemented.");
	}
	setiFrameHeight() {
		throw new Error("Method not implemented.");
	}
	public updateCircuit() {
		runCircuit();
	}
}

function runCircuit() {
	throw new Error("Function not implemented.");
}

// public void onModuleLoad() {

const onModuleLoad = ()=>{

	// static CirSim mysim;
	const mysim = new CirSim();
	mysim.init();
	
	//     public void onResize(ResizeEvent event)
	//     {               
		mysim.setCanvasSize();
		mysim.setiFrameHeight();	
		
		// }
        // });
		mysim.updateCircuit();
		
	}


	  

// function runCircuit() {
// 	// int iter;
// 	// boolean debugprint = dumpMatrix;
// 	// dumpMatrix = false;
// 	// long steprate = (long) (160*getIterCount());
// 	// long tm = System.currentTimeMillis();
// 	// long lit = lastIterTime;
// 	// if (1000 >= steprate*(tm-lastIterTime))
// 	//     return;
// 	for (iter = 1; ; iter++) {
// 	    int i, j, k, subiter;
// 	    for (i = 0; i != elmList.size(); i++) {
// 		CircuitElm ce = getElm(i);
// 		ce.startIteration();
// 	    }
// 	    steps++;
// 	    final int subiterCount = 5000;
// 	    for (subiter = 0; subiter != subiterCount; subiter++) {
// 		converged = true;
// 		subIterations = subiter;
// 		for (i = 0; i != circuitMatrixSize; i++)
// 		    circuitRightSide[i] = origRightSide[i];
// 		if (circuitNonLinear) {
// 		    for (i = 0; i != circuitMatrixSize; i++)
// 			for (j = 0; j != circuitMatrixSize; j++)
// 			    circuitMatrix[i][j] = origMatrix[i][j];
// 		}
// 		for (i = 0; i != elmList.size(); i++) {
// 		    CircuitElm ce = getElm(i);
// 		    ce.doStep();
// 		}
// 		if (stopMessage != null)
// 		    return;
// 		boolean printit = debugprint;
// 		debugprint = false;
// 		for (j = 0; j != circuitMatrixSize; j++) {
// 		    for (i = 0; i != circuitMatrixSize; i++) {
// 			double x = circuitMatrix[i][j];
// 			if (Double.isNaN(x) || Double.isInfinite(x)) {
// 			    stop("nan/infinite matrix!", null);
// 			    return;
// 			}
// 		    }
// 		}
// 		if (printit) {
// 		    for (j = 0; j != circuitMatrixSize; j++) {
// 			for (i = 0; i != circuitMatrixSize; i++)
// 			    System.out.print(circuitMatrix[j][i] + ",");
// 			System.out.print("  " + circuitRightSide[j] + "\n");
// 		    }
// 		    System.out.print("\n");
// 		}
// 		if (circuitNonLinear) {
// 		    if (converged && subiter > 0)
// 			break;
// 		    if (!lu_factor(circuitMatrix, circuitMatrixSize,
// 				  circuitPermute)) {
// 			stop("Singular matrix!", null);
// 			return;
// 		    }
// 		}
// 		lu_solve(circuitMatrix, circuitMatrixSize, circuitPermute,
// 			 circuitRightSide);
		
// 		for (j = 0; j != circuitMatrixFullSize; j++) {
// 		    RowInfo ri = circuitRowInfo[j];
// 		    double res = 0;
// 		    if (ri.type == RowInfo.ROW_CONST)
// 			res = ri.value;
// 		    else
// 			res = circuitRightSide[ri.mapCol];
// 		    /*System.out.println(j + " " + res + " " +
// 		      ri.type + " " + ri.mapCol);*/
// 		    if (Double.isNaN(res)) {
// 			converged = false;
// 			//debugprint = true;
// 			break;
// 		    }
// 		    if (j < nodeList.size()-1) {
// 			CircuitNode cn = getCircuitNode(j+1);
// 			for (k = 0; k != cn.links.size(); k++) {
// 			    CircuitNodeLink cnl = (CircuitNodeLink)
// 				cn.links.elementAt(k);
// 			    cnl.elm.setNodeVoltage(cnl.num, res);
// 			}
// 		    } else {
// 			int ji = j-(nodeList.size()-1);
// 			//System.out.println("setting vsrc " + ji + " to " + res);
// 			voltageSources[ji].setCurrent(ji, res);
// 		    }
// 		}
// 		if (!circuitNonLinear)
// 		    break;
// 	    }
// 	    if (subiter > 5)
// 		System.out.print("converged after " + subiter + " iterations\n");
// 	    if (subiter == subiterCount) {
// 		stop("Convergence failed!", null);
// 		break;
// 	    }
// 	    t += timeStep;
// 	    for (i = 0; i != scopeCount; i++)
// 	    	scopes[i].timeStep();
// 	    tm = System.currentTimeMillis();
// 	    lit = tm;
// 	    if (iter*1000 >= steprate*(tm-lastIterTime) ||
// 		(tm-lastFrameTime > 500))
// 		break;
// 	} // for (iter = 1; ; iter++)
// 	lastIterTime = lit;
// //	System.out.println((System.currentTimeMillis()-lastFrameTime)/(double) iter);

// }
	  