import { env as testEnv } from './environment.testing'
import { env as devEnv } from './environment.develop'
import { env as prodEnv } from './environment.prod'
import { EnvironmentModel } from './environmentModel'

const getEnvVars = (env: string | undefined = process.env.NODE_ENV): EnvironmentModel => {
    switch (env) {
        case 'prod':
            return prodEnv
        case 'testing':
            return testEnv
        case 'develop':
            return devEnv
        default:
            return devEnv
    }
}

export const config = getEnvVars();